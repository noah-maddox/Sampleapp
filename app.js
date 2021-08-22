const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const db = require("./database");

const path = require("path");

app.use(express.static(path.join(__dirname, "Sampleapp/dist/Sampleapp")));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true,
  })
);

app.get("/firstroute", (req, res) => {
  res.send("welcome to the firstroute");
});

app.get("/accounts", function (req, res) {
  let sql = "select * from accounts";
  db.query(sql, function (error, results, fields) {
    if (error) throw error;
    res.json({
      status: 200,
      results,
      message: "User accounts retrieved successfully",
    });
  });
});

app.get("/accounts/:username", (req, res) => {
  const username = req.params.username;
  db.query(
    "select * from accounts where username = ?",
    username,
    (error, results) => {
      if (error) throw error;
      res.json({
        status: 200,
        results,
        message: "Individual user retrieved successfully",
      });
    }
  );
});

app.post("/insertaccount", (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const created_on = new Date();

    db.query(
      "INSERT INTO accounts (username, password, email, created_on) VALUES (?, ?, ?, ?)",
      [username, password, email, created_on]
    );
    res.send("successfully inserted new account!");
    //);
  } catch (err) {
    console.error(err.message);
    res.send(err);
  }
});

app.get("/index", (req, res) => {
  res.sendFile(path.join(__dirname, "/Sampleapp/dist/Sampleapp/index.html"));
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/Sampleapp/dist/Sampleapp/index.html"));
});

app.listen(process.env.PORT || 8080);
module.exports = app;
