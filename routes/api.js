const express = require("express");
const { Client } = require("@elastic/elasticsearch");

const INDEX_NAME = "test_index";
const MAX_SIZE = 3000;

const client = new Client({
  nodes: [
    "http://localhsot:9200",
    "http://localhost:9201",
    "http://localhost:9292"
  ]
});

const router = express.Router();

router.get("/", async (req, res, next) => {
  const Queue = [];
  const responseQueue = [];

  const params = {
    index: INDEX_NAME,
    body: {
      size: MAX_SIZE,
      query: {
        match_all: {}
      },
      sort: [
        {
          tie_breaker_id: "asc"
        }
      ]
    }
  };

  const result = await client.search(params);
  Queue.push(result);

  while (Queue.length) {
    const { body } = Queue.shift();
    const total = body.hits.total.value;

    body.hits.hits.forEach(row => {
      responseQueue.push(row);
    });

    if (total === responseQueue.length) {
      break;
    } else {
      params.body.search_after = ["tie_breaker_id"];
    }

    Queue.push(await client.search(params));
  }
  console.log(Queue);

  res.json({
    aaa: "bbb"
  });
});

module.exports = router;
