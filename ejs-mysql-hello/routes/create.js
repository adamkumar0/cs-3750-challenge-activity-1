var express = require('express');
var router = express.Router();

var dbCon = require('../lib/database');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('create', {});
});

router.post('/', function(req, res, next) {
    // Get the value froom the key in the POST
    let name = req.body.name;
    let age = req.body.age;
    let occupation = req.body.occupation;
    let sql = "INSERT INTO hello_table (name, age, occupation) VALUES ('" + name + "', " + age + ", '" + occupation + "')";
    console.log("create.js: sql statement is: " + sql);
    dbCon.execute(sql, function(err, results, fields) {
        if (err) {
            throw err;
        }
        console.log("Inserted row");
    });
    res.render('create', {});
});

module.exports = router;
