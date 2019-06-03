const express = require("express");
const { Client } = require("@elastic/elasticsearch");

const INDEX_NAME = "test_index";

const client = new Client({
  nodes: [
    "http://localhsot:9200",
    "http://localhost:9201",
    "http://localshot:9292"
  ]
});

const router = express.Router();

router.get("/", async (req, res, next) => {
  const responseQueue = [];

  const result = await client.search({
    index: INDEX_NAME,
    body: {
      size: 2,
      query: {
        match_all: {}
      },
      sort: [
        {
          tie_breaker_id: "desc"
        }
      ]
    }
  });

  responseQueue.push(result);

  while (responseQueue.length) {
    const { body } = responseQueue.shift();
    body.hits.hits.forEach(row => {
      console.log(JSON.stringify(row));
    });
  }

  res.send({
    status: 200
  });
});

module.exports = router;
