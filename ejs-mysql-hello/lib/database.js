let mysql = require('mysql2');

var con = mysql.createConnection( {
    host: "127.0.0.1",
    user: "adam",
    password: "Root55Root55!"
    });

    con.connect(function(err) {
        if (err) {
            throw err;
        }
        console.log("Connected to the database");
        con.query("CREATE DATABASE IF NOT EXISTS hello_world", function(err, result) {
            if (err) {
                throw err;
            }
            console.log("Database created");
            selectDatabase();
        });
    })

    function selectDatabase() {
        let sql = "USE hello_world";
        con.query(sql, function(err, result) {
            if (err) {
                throw err;
            }
            console.log("Selected database");
            createTable();
        });
    }

    function createTable() {
        let sql = "CREATE TABLE IF NOT EXISTS hello_table (\n" +
                    "id INT NOT NULL AUTO_INCREMENT,\n" +
                    "name VARCHAR(45) NOT NULL,\n" +
                    "age INT NOT NULL,\n" +
                    "occupation VARCHAR(45) NOT NULL,\n" +
                    "PRIMARY KEY (id)\n" +
                    ")";
        con.execute(sql, function(err, result) {
            if (err) {
                throw err;
            }
            console.log("Table is good");
        });
    }





module.exports = con;