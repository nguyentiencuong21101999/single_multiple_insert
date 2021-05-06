const procedure = require("../../database/db.mariadb.query");

const users = {};
users.insert = async (email, password) => {
  const url_query = `insert into user(email,password) values ('${email}','${password}')`;
  const results = await procedure.queryProc(url_query);
  console.log(results);
  return results;
};
users.update = async (id, email, password) => {
  const url_query = `UPDATE user SET email='${email}', password='${password}'WHERE id=${id}`;
  const results = await procedure.queryProc(url_query);
  if (results.affectedRows > 0) {
    return results;
  }
};
users.delete = async (id) => {

  const url_query = `DELETE FROM user WHERE id = ${id};`;
  const results = await procedure.queryProc(url_query);
  if (results.affectedRows > 0) {
    return results;
  }
};

users.getUser = async (email) => {
  const url_query = "select * from user";
  const results = await procedure.queryProc(url_query);
  if (results.length > 0) {
    return results;
  }
};

module.exports = users;
