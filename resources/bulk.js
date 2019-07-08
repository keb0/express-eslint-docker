const { Client } = require("@elastic/elasticsearch");

const INDEX_NAME = "bulk_index";

const client = new Client({
  nodes: [
    "http://localhsot:9200",
    "http://localhost:9201",
    "http://localshot:9292"
  ]
});

async function run() {
  const data1 = {
    abc: 123,
    efg: {
       hij: 123,
       klm: 345
    }
  };

  const data2 = {
    abc: 456,
    efg: {
       hij: 555,
       klm: 444
    }
  };

  const json = [];
  const index = { index: { _index: INDEX_NAME} };
  [data1, data2].forEach(row => {
    json.push(index, row);
  });

  const result = await client.bulk({
    index: INDEX_NAME,
    body: json
  });
}

run().catch(e => console.log(e));
