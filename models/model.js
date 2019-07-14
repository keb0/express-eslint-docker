const Client = require("../lib/connect");

exports.show = async () => {
  const client = new Client();
  const params = {
    index: "test_index",
    body: {
      query: {
        bool: {
          filter: [{
            term: { abc: "abc" }
          }]
        }
      }
    }
  };

//  const { body } = await client.search(params);
//  const response = body.hits.hits.map(row => {
//    return row._source;
//  });
  const response = await client.search(params);
  console.log(response);
  return {
    data: response,
    count: 1
//    count: body.hits.total.value
  };
};
