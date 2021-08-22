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
  db.query("select * from accounts", function (error, results, fields) {
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

app.listen(process.env.PORT || 8080);
module.exports = app;
