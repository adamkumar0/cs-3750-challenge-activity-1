var express = require('express');
var router = express.Router();

var dbCon = require('../lib/database');

router.get('/', function(req, res, next) {
    console.log("retrieve.js: In GET");
    let sql = "SELECT name, age, occupation FROM hello_table";
    dbCon.query(sql, function(err, rows) {
        if (err) {
            throw err;
        }
        res.render('retrieve', {data : rows});
    });
  
});

module.exports = router;