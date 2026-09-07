var express = require('express');
var router = express.Router();

var dbCon = require('../lib/database');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('delete', {});
});

router.post('/', function(req, res, next) {
    // Get the value froom the key in the POST
    let sql = "DELETE FROM hello_table";
    console.log("delete.js: sql statement is: " + sql);
    dbCon.execute(sql, function(err, results, fields) {
        if (err) {
            throw err;
        }
        console.log("Deleted rows");
    });
    res.render('delete', {});
});

module.exports = router;
