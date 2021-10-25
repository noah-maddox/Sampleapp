const express = require("express");
const bodyParser = require("body-parser");
const crypto = require("crypto");
const algorithm = "aes-256-cbc";
const https = require("https");
const fs = require("fs");
const app = express();

const db = require("./database");

const path = require("path");

// generate 16 bytes of random data
const initVector = crypto.randomBytes(16);

// protected data
const message = "This is a secret message";

// secret key generate 32 bytes of random data
const Securitykey = crypto.randomBytes(32);

// the cipher function
const cipher = crypto.createCipheriv(algorithm, Securitykey, initVector);

app.use(express.static(path.join(__dirname, "Sampleapp/dist/Sampleapp")));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "GET, PUT, POST");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
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

app.get("/accounts", (req, res) => {
  const sql = "select * from accounts";
  db.query(sql, (error, results, fields) => {
    if (error) {
      throw error;
    } else if (results.length == 0) {
      res.json({ message: "Failed to return users" });
    } else {
      // for (field in fields) {
      //   // the decipher function
      //   const decipher = crypto.createDecipheriv(algorithm, Securitykey, initVector);

      //   let decryptedData = decipher.update(encryptedData, "hex", "utf-8");

      //   decryptedData += decipher.final("utf8");

      //   console.log("Decrypted message: " + decryptedData);
      //   field.password
      // }
      res.json({
        results,
      });
    }
  });
});

app.get("/accounts/:username", (req, res) => {
  const username = req.params.username;
  db.query(
    "select * from accounts where username = ?",
    username,
    (error, results) => {
      if (error) {
        throw error;
      } else if (results.length == 0) {
        res.json({ message: "No user with this username" });
      } else {
        console.log("result BEFORE decryption " + results[0].password);
        // the decipher function
        const decipher = crypto.createDecipheriv(
          algorithm,
          Securitykey,
          initVector
        );

        let decryptedData = decipher.update(
          results[0].password,
          "hex",
          "utf-8"
        );

        decryptedData += decipher.final("utf8");

        console.log("result AFTER decryption " + decryptedData);
        res.json({
          results,
        });
      }
    }
  );
});

app.post("/insertaccount", (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const created_on = new Date();

    // encrypt the message
    // input encoding
    // output encoding
    // let encryptedPassword = cipher.update(password, "utf-8", "hex");

    // encryptedPassword += cipher.final("hex");

    // console.log(
    //   "Encrypted password for " + username + " is " + encryptedPassword
    // );

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

// const sslServer = https.createServer(
//   {
//     key: fs.readFileSync(path.join(__dirname, "cert", "server.key")),
//     cert: fs.readFileSync(path.join(__dirname, "cert", "server.crt")),
//   },
//   app
// );

app.listen(process.env.PORT || 8081);
//sslServer.listen(process.env.PORT || 3443);

module.exports = app;
