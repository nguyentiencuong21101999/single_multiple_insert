const express = require('express')
const app = express()
const port = 3000

 app.use(express.urlencoded({ extended: false }));
 app.use(express.json())

 require('dotenv').config()
 require("./database/db.mongodb.connection");
 require("./database/db.mariadb.connection");

 const userRouter = require('./modules/user/user.router');
 const userMariadbROuter = require("./modules/user_mariadb/user.router");
 app.use("/user", userRouter);
 app.use("/user-mariadb", userMariadbROuter);



 const {handleError} = require("./helper/respone_handle/error_handle")


 app.use((err, req, res, next) => {
    handleError(err, res)
  });
app.listen(process.env.PORT,setTimeout(async() => {
  console.log(` app listening at http://localhost:${process.env.PORT}`)
}),10000)