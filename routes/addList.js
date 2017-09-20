const express = require("express");
const addListRoutes = express.Router();

addListRoutes.get("/", function(req, res) {
  res.render("addList");
});

module.exports = addListRoutes;
