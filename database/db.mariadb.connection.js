const mysql = require('mysql');
const config = require('../database/db.config')
let connection = mysql.createConnection(config.mariadb);
connection.connect((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Connected MySql...");
    }
});
module.exports = connection;