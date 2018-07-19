
require("dotenv").config();

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: process.env.MYSQL_LOCAL_ID,
  password: process.env.MYSQL_LOCAL_PWD
});


con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "SELECT * FROM debug.debugstorage";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Records selected:");
      console.log(result);
    });


    var sql = "INSERT INTO debug.debugstorage (storagecontext, storagedata, storagetype) VALUES ?";

    var values = [
        ['LOCAL', 'ValueStored3', 'String'],
        ['LOCAL', 'ValueStored4', 'String'],
        ['LOCAL', 'ValueStored5', 'String'],
    ]
    con.query(sql, [values], function (err, result) {
        if (err) throw err;
        console.log("Records inserted: " + result.affectedRows);
        console.log(result.message);
    });


  });