const { Router } = require("express");

Router.get("/", (req, res) => {
  res.send("products routes");
});

module.exports = { Router };
