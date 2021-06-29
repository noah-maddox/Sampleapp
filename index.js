const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
  res.send("welcome to home page");
});

app.get("/firstroute", (req, res) => {
  res.send("welcome to the firstroute");
});

const port = process.env.PORT || 8081;

// Start the app by listening on the default Heroku port
app.listen(port, (req, res) => {
  console.log(`running on port ${port}`);
});
