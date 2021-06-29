const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("welcome to home page");
});

app.get("/firstroute", (req, res) => {
  res.send("welcome to the firstroute");
});

app.listen(process.env.PORT || 8081);
module.exports = app;
