const mongoose = require("mongoose");
const config = require("./db.config");


module.exports = async () =>
  new Promise((resolve, reject) => {
    mongoose.connect(config.mongodb.url, config.mongodb.option);
    var db = mongoose.connection;
    db.on("error", function (err) {
      reject(err);
    });

    db.once("open", function () {
      resolve(db);
    });
  });

  // mongoose
//   .connect(config.mongodb.url, config.mongodb.option)
//   .then(() => {
//     console.log("Mongoose Connected ...");
//     return true;
//   })
//   .catch((err) => {
//     return false;
//     console.log("Mongoose connect fail ...");
//   });