const mairiadbConnect = require("./database/db.mariadb.connection");
const mongodbConnect = require("./database/db.mongodb.connection");

module.exports = async function initConnection(callback) {
  try {
    const result = await mongodbConnect();
    console.log('Mongoose Connected ...')
  } catch(e) {
    console.error(e)
  }
  try {
    const result =  await mairiadbConnect();
    console.log("mariaDB conneted ...");
  } catch (e) {
    console.error(e)
  }
  callback();
};

// user: {
//   userId primary key
//   phoneNumber unique
//   email: unique
//   username
// }

// authorization: {
//   password binary
//   salt binary
//   userId primary key
// }

// token: {
//   payload: {
//     userId: "abc",
//     phoneNumber: "",
//     email
//   }
// }

// class Payload {

//   this.username = {
//     value: "",
//     validation: ['isEmpty', 'isString', 'isUsername']
//   }

//   this.phoneNumber = {
//     value: "",
//     validation: []
//   }

//   setUesrname(value)

// }

// class validation {

//   isEmpty => true empty false value (! null, ! "", ! undefined)
//   isString

//   isNumber

//   isUsername(value) {
//     const result = RegExp('')
//     result.test(value)

//   }
//   isPhoneNumber

// }