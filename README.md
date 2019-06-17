# express-elasticserch-docker

## Install Elasticsearch with docker

```
docker pull docker.elastic.co/elasticsearch/elasticsearch:7.0.0
docker images
docker run -n elasticsearch -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" docker.elastic.co/elasticsearch/elasticsearch:7.0.0

curl http://localhost:9200
```

## docker-compose
### create docker-compose.yml
```
docker-compose up -d
curl http://localhost:9200/_cat/health
curl http://localhost:9201/_cat/health
curl http://localhost:9202/_cat/health

docker volume ls
curl -H "Content-type: application/json" -XPOST http://localhost:9200/test/_doc -d '{"hoge": "hoge"}'
curl -H "Content-type: application/json" -XGET http://localhost:9200/test/_search

docker-compose down
curl http://localhost:9200
curl http://localhost:9201
curl http://localhost:9202

docker volume ls
docker-compose up
curl -H "Content-type: application/json" -XGET http://localhost:9200/test/_search
```

## express

```
docker-compose up

cd resources
node ingest.js
node indecies.js [json file]
curl localhost:9200/test_index | python -m json.tool
node index.js [json file]
http://localhost:9200/test_index/

npm run start
localhost:3000
```

## test
```
npm run test
```
