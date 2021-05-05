const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

require("dotenv").config();

const userRouter = require("./modules/user/user.router");
const userMariadbROuter = require("./modules/user_mariadb/user.router");
app.use("/user", userRouter);
app.use("/user-mariadb", userMariadbROuter);
const initConnection = require("./start.server")
const { handleError } = require("./helper/respone_handle/error_handle");

app.use((err, req, res, next) => {
  handleError(err, res);
});
initConnection(() => {
    app.listen(process.env.PORT,() => {
    console.log(`app listening at dddhttp://localhost:${process.env.PORT}`)
  })
});
