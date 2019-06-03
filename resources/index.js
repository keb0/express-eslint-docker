const fs = require("fs");
const { Client } = require("@elastic/elasticsearch");

const INDEX_NAME = "test_index";

const client = new Client({
  nodes: [
    "http://localhsot:9200",
    "http://localhost:9201",
    "http://localshot:9292"
  ]
});

async function run() {
  const json = JSON.parse(fs.readFileSync(process.argv[2]), "utf8");

  // promise API
  await json.forEach(async row => {
    const result = await client.index({
      index: INDEX_NAME,
      id: row.abc,
      body: row
    });
    console.log(result.body);
  });
}

run().catch(console.log);
