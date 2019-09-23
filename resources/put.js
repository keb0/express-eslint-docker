const fs = require("fs");
const { Client } = require("@elastic/elasticsearch");

const FILE_PATH = "./resources/ABE0000C91.pdf"
const INDEX_NAME = "my_index";

const client = new Client({
  nodes: [
    "http://localhsot:9200",
    "http://localhost:9201",
    "http://localshot:9202"
  ]
});

async function run() {
  const data = fs.readFileSync(FILE_PATH, 'base64');

  // promise API
  const result = await client.index({
    index: INDEX_NAME,
    pipeline: 'attachment',
    body: { data }
  });
  console.log(result.body);
}

run().catch(console.log);
