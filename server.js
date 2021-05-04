const express = require('express')
const app = express()
const port = 3000

 app.use(express.urlencoded({ extended: false }));
 app.use(express.json())

 require('dotenv').config()
 require("./database/db.mongodb.connection");
 require("./database/db.mariadb.connection");

 const saveRouter = require('./modules/user/user.router')
 app.use("/user", saveRouter)

 const {handleError} = require("./helper/respone_handle/error_handle")


 app.use((err, req, res, next) => {
    handleError(err, res)
  });
app.listen(process.env.PORT, () => {
  console.log(` app listening at http://localhost:${process.env.PORT}`)
})