const express = require("express");
//const client = require("./database");
const bodyParser = require("body-parser");
const app = express();

const mysql = require("mysql");

const path = require("path");

app.use(express.static(path.join(__dirname, "Sampleapp/dist/Sampleapp")));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

var con = mysql.createConnection({
  host: "daboy.com",
  database: "daboycom_noah",
  user: "daboycom_noah",
  password: "sdlkdjfsd&6dDS",
});

con.connect(function (err) {
  if (err) throw err;
});

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
  con.query("select * from accounts", function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
});

// app.post("/insertuser", async (req, res) => {
//   try {
//     const username = req.body.username;
//     const password = req.body.password;
//     const email = req.body.email;
//     const newUser = await client.query(
//       "INSERT INTO accounts (username, password, email) VALUES ($1, $2, $3) RETURNING *",
//       [username, password, email]
//     );

//     res.json(newUser.rows[0]);
//   } catch (err) {
//     console.error(err.message);
//   }
// });

app.get("/index", (req, res) => {
  res.sendFile(path.join(__dirname, "/Sampleapp/dist/Sampleapp/index.html"));
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/Sampleapp/dist/Sampleapp/index.html"));
});

app.listen(process.env.PORT || 8081);
module.exports = app;

//client.connect();

// client.query(`select * from accounts`, (err, result) => {
//   if (!err) {
//     console.log(result.rows);
//   }
//   client.end();
// });
