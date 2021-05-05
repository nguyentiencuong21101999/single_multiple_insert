const mysql = require("mysql");
const config = require("../database/db.config");

module.exports = async () => new Promise(
    (resolve, reject) => {
        const connection = mysql.createConnection(config.mariadb);
      connection.connect(error => {
          if (error) {
          reject(error);
          return;
        }
        resolve(connection);
      })
    });

// let connection = mysql.createConnection(config.mariadb);
// connection.connect((error) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log("Connected MySql...");
//     }
// });
