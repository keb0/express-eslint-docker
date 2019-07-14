const { Client } = require("@elastic/elasticsearch");

class connect {
  constructor() {
    this.nodes = [
      "http://localhost:9200",
      "http://localhost:9201",
      "http://localhost:9202"
    ];

    return this.client();
  }

  client() {
    return new Client({ nodes: this.nodes });
  }
};

module.exports = connect;
