const { Client } = require("@elastic/elasticsearch");

const INDEX_NAME = "aggs_index";

const client = new Client({
  nodes: [
    "http://localhsot:9200",
    "http://localhost:9201",
    "http://localshot:9292"
  ]
});

async function run() {
  const mappings = {
    mappings: {
      properties: {
        abc: {
          type: "integer"
        },
        efg: {
          type: "nested",
          properties: {
            hij: { type: "integer" },
            klm: { type: "integer" }
          }
        }
      }
    }
  };

  await client.indices.create({
    index: INDEX_NAME,
    body: mappings
  });

  const data1 = {
    abc: 123,
    efg: [
    {
       hij: 123,
       klm: 345
    },
    {
       hij: 999,
       klm: 987
    }
    ]
  };

  const data2 = {
    abc: 456,
    efg: [
    {
       hij: 555,
       klm: 444
    },
    {
       hij: 999,
       klm: 987
    }
    ]
  };

  const data3 = {
    abc: 789,
    efg: [
    {
       hij: 555,
       klm: 333
    },
    {
       hij: 999,
       klm: 987
    }
    ]
  };

  const json = [];
  const index = { index: { _index: INDEX_NAME} };
  [data1, data2, data3].forEach(row => {
    json.push(index, row);
  });

  const result = await client.bulk({
    index: INDEX_NAME,
    body: json
  });
}

run().catch(e => console.log(e));
