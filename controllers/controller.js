const logger = require("../lib/log4js");
const model = require("../models/model");

exports.show = async (req, res, next) => {
  try {
    const response = await model.search();

    if (response.result === 0) {
      res.status(404).json({
        data: null,
        count: response.count
      });
    }
    if (response.result === 1) {
      res.status(200).json({
        data: response.data,
        count: response.count
      });
    }
  } catch (e) {
    logger.info(e);
    console.log("controller");
    console.log(e);
    res.status(500).json({
      message: e.message
    });
  }
};
