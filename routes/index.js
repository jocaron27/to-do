const express = require("express");
const routes = express.Router();

routes.get("/", function(req, res) {
  res.render("index");
});

routes.post("/addList", function(req, res) {
  console.log(req.body.name);
  res.redirect("/");
});

module.exports = routes;
