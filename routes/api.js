const express = require("express");
const model = require("../models/model");

const router = express.Router();

router.get("/", model.show);

module.exports = router;
