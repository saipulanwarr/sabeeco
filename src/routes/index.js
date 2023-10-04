const express = require("express");
const Route = express.Router();

const userRouter = require("./user");
const productRouter = require("./product");

Route.use("/user", userRouter).use("/product", productRouter);

module.exports = Route;
