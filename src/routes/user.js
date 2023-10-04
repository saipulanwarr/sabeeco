const express = require("express");
const Route = express.Router();

const { login } = require("../controllers/user");

Route.post("/login", login);

module.exports = Route;
