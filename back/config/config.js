const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  development: {
    username: "root",
    password: "fourleaf0309!!",
    port: 3306,
    database: "magic_grid",
    dialect: "mysql",
    host: "127.0.0.1",
  },

  production: {
    username: "root",
    password: "fourleaf0309!!",
    port: 3306,
    database: "magic_grid",
    dialect: "mysql",
    host: "127.0.0.1",
  },
};
