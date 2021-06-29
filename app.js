const express = require("express");
const app = express();

const path = require("path");

app.use(express.static(path.join(__dirname, "dist/GreatOutdoors")));

app.get("/firstroute", (req, res) => {
  res.send("welcome to the firstroute");
});

app.get("/index", (req, res) => {
  res.sendFile(path.join(__dirname, "/dist/GreatOutdoors/index.html"));
});

app.listen(process.env.PORT || 8081);
module.exports = app;
