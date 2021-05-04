const config = {
  mongodb: {
    url: process.env.STRING_URL_LOCAL,
    option: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
  mariadb:{
    host: process.env.DB_HOST_LOCAL,
    user: process.env.DB_USER_LOCAL,
   // password: process.env.PASSWORD_LOCAL,
    //database: process.env.DB_DATABASE_LOCAL,
  }
};

module.exports = config;
