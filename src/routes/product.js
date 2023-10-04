const express = require("express");
const Route = express.Router();

const { getAll, getDetail } = require("../controllers/product");

Route.get("/", getAll).get("/:productId", getDetail);

module.exports = Route;
