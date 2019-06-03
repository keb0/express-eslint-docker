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
  // promise API
  const result = await client.ingest.putPipeline({
    id: "tie_breaker_pipeline",
    body: {
      description: "set tie_breaker_id",
      processors: [{ set: { field: "tie_breaker_id", value: "{{_id}}" } }]
    }
  });
  console.log(result.body);
}

run().catch(console.log);
