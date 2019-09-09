const com = require("./com");
const Client = require("../lib/connect");

exports.search = async () => {
  const client = new Client();
  const params = {
    index: "test_index",
    body: {
      query: {
        bool: {
          filter: [{
            term: { abc: "abc" }
//            aterm: { abc: "abc" }
          }]
        }
      }
    }
  };

  try {
    const test = await com();
  } catch (e) {
    console.log("model");
    throw e;
  }

//  const { body } = await client.search(params);
//  const response = body.hits.hits.map(row => {
//    return row._source;
//  });
  const response = await client.search(params);

  return {
    data: response,
    result: 1
//    count: body.hits.total.value
  };
};
