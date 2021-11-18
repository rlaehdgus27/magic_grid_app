const Sequelize = require("sequelize");
const dotenv = require("dotenv").config();

const imgbox = require("./imgbox");

const env = process.env.NODE_ENV;

const config = require("../config/config")[env];

const db = {};

db.imgbox = imgbox;

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

Object.keys(db).forEach((modelName) => {
  db[modelName].init(sequelize);
});

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
