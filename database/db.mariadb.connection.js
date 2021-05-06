// const mysql = require("mysql");
// const config = require("../database/db.config");

// module.exports = async () => new Promise(
//     (resolve, reject) => {
//         const connection = mysql.createConnection(config.mariadb);
//       connection.connect(error => {
//           if (error) {
//           reject(error);
//           return;
//         }
//         resolve(connection);
//       })
//     });
const mariadb = require("mariadb");
const config = require("../database/db.config");
module.exports = async () =>
  new Promise(async(resolve, reject) => {
    try {
      const  pool = mariadb.createPool(config.pollConnection);
      const connection = await pool.getConnection();
      resolve(connection);
    } catch (error) {
      reject(error);
    }
  });
