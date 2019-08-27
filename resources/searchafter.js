const Client = require("../lib/connet");

const client = new Client();

const search = async () => {
  const allQuotes = []
  const responseQueue = []

  const response = await client.search({
    index: 'game-of-thrones',
    _source: ['quote'],
    body: {
      query: {
        match_all: {}
      },
      sort: [ "tie_break_id"]
    }
  })

  responseQueue.push(response)

  while (responseQueue.length) {
    const { body } = responseQueue.shift()

    body.hits.hits.forEach(function (hit) {
      allQuotes.push(hit._source.quote)
    })

    if (body.hits.total.value === allQuotes.length) {
      return allQuotes;
    }

    // bodyの最後を取得して、ソート値をとってくるか、
  　// allQuotesの最後の値からソート値をとってくる
    const sortValue = ...;

    responseQueue.push(
      const response = await client.search({
        index: 'game-of-thrones',
        _source: ['quote'],
        body: {
          query: {
            match_all: {}
          },
          search_after: [ sortValue ],
          sort: [ "tie_break_id" ]
        }
      })
    )
  }
}

module.exports = search;
