PUT my_index
{
  "settings": {
    "index": {
      "number_of_shards": 1,
      "number_of_replicas": 0,
      "analysis": {
        "tokenizer": {
          "kuromoji_search": {
            "type": "kuromoji_tokenizer",
            "mode": "search"
          }
        },
        "analyzer": {
          "kuromoji_analyzer": {
            "tokenizer": "kuromoji_search",
            "filter": [
              "kuromoji_baseform",
              "kuromoji_part_of_speech",
              "cjk_width",
              "stop",
              "kuromoji_stemmer",
              "lowercase"
            ]
          }
        }
      }
    }
  },
  "mappings": {
    "properties": {
      "content": {
        "type": "text",
        "analyzer": "kuromoji_analyzer"
      }
    }
  }
}

PUT _ingest/pipeline/attachment
{
  "description" : "Extract attachment information",
  "processors" : [
    {
      "attachment" : {
        "field" : "data"
      }
    }
  ]
}

POST my_index/_search
{
  "query": {
    "match": {
      "attachment.content": "5100"
    }
  }
}
