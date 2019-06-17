const { Client } = require('@elastic/elasticsearch')
//const client = new Client({
//  nodes: ["http://localhost:9200", "http://loalhost:9201", "http://loalhost:9202"]
//})

exports.show = async (req, res) => {

  res.status(444).send("Hello World!")

};
