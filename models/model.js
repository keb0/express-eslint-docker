const { Client } = require("@elastic/elasticsearch");

const client = new Client({
  nodes: [
    "http://localhost:9200",
    "http://localhost:9201",
    "http://localhost:9202"
  ]
});

exports.show = async (req, res) => {
  const params = {
    index: "test_index",
    body: {
      query: {
        match_all: {}
      }
    }
  };

  try {
    const { body } = await client.search(params);
    const response = body.hits.hits.map(row => {
      return row._source;
    });
    res.status(200).json({
      test: response,
      data: body.hits.total.value
    });
  } catch (e) {
    res.status(500).json({
      message: e.message
    });
  }
};
