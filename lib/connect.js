const { Client } = require("@elastic/elasticsearch");

const client = new Client({
  nodes: [
    "http://localhost:9200",
    "http://localhost:9201",
    "http://localhost:9202"
  ]
});

module.exports = client;
