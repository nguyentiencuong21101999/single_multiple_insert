const express = require('express')
const app = express()
const port = 3000

 app.use(express.urlencoded({ extended: false }));
 app.use(express.json())
 require("./database/db.connection");
 const saveRouter = require('./modules/save/user.router')
 app.use("/user", saveRouter)

 const {} = require("./helper/respone_handle/error_handle")


 app.use((err, req, res, next) => {
    (err, res)
  });
app.listen(port, () => {
  console.log(` app listening at http://localhost:${port}`)
})