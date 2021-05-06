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
const initConnection = require("./start.server");
const { handleError } = require("./helper/respone_handle/error_handle");

app.get("/test", (req, res, next) => {
  const ListData = [
    { email: "cuong", password: "a" },
    { email: "cuong", password: "a" },
    { email: "cuong", password: "a" },
    { email: "cuong", password: "a" },
    { email: "cuong", password: "a" },
  ];

  let insert = ListData.map(async value =>{
    try {
      const url_query = `insert into user(email,password) values ('${value.email}','${value.password}');`;
      await query.queryProc(url_query);
    } catch (error) {
      console.log(error);
    }
      
  });
  Promise.all(insert)
  .then(responses => responses.forEach(()=>{
    console.log("success");
  }
  ))
  .catch(err =>{
    console.log(err);
  })
  ;
});
app.get("/test2", async(req, res, next) => {
  try {
    const ListDatas = [
      { email: "cuong", password: "a" },
      { email: "cuong", password: "a" },
      { email: "cuong", password: "a" },
      { email: "cuong", password: "a" },
      { email: "cuong", password: "a" },
    ];
    let val = '';
    for(let i = 0;i < ListDatas.length; i++){
      const value = ListDatas[i];
      const values = `('${value.email}','${value.password}')`;
      if(i === (ListDatas.length -1)){
        val += values +';';
      }else{
        val += values +',';
      }
    }
    const url_query = `insert into user(email,password) values  ${val}`;
    const results = await query.queryProc(url_query);
    console.log(results);
   
  } catch (error) {
    console.log(error);
  }
  
  
});

app.use((err, req, res, next) => {
  handleError(err, res);
});
initConnection(() => {
  app.listen(process.env.PORT, () => {
    console.log(`app listening at http://localhost:${process.env.PORT}`);
  });
});

const mysql = require("mysql");
const config = require("./database/db.config");
const connection = mysql.createConnection(config.mariadb);
const query = require("./database/db.mariadb.query");
