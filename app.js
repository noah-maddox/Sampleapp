const express = require("express");
const app = express();

const path = require("path");

app.use(express.static(path.join(__dirname, "Sampleapp/dist/Sampleapp")));

app.get("/firstroute", (req, res) => {
  res.send("welcome to the firstroute");
});

app.get("/index", (req, res) => {
  res.sendFile(path.join(__dirname, "/Sampleapp/dist/Sampleapp/index.html"));
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/Sampleapp/dist/Sampleapp/index.html"));
});

app.listen(process.env.PORT || 8081);
module.exports = app;
