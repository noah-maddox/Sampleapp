const mysql = require("mysql");

var connection = mysql.createConnection({
  host: "daboy.com",
  database: "daboycom_noah",
  user: "daboycom_noah",
  password: "sdlkdjfsd&6dDS",
});

connection.connect(function (err) {
  if (err) throw err;
});

module.exports = connection;
