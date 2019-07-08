const { Client } = require("@elastic/elasticsearch");
const client = require("../lib/connect");

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
      data: response,
      count: body.hits.total.value
    });
  } catch (e) {
    res.status(500).json({
      message: e.message
    });
  }
};
