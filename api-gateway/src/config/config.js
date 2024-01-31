/* eslint-disable no-undef */
require("dotenv").config();
module.exports = {
  development: {
    username: "root",
    password: process.env.MYSQL_DB_PASS,
    database: process.env.MYSQL_DB_NAME,
    host: process.env.MYSQL_DB_HOST,
    dialect: "mysql",
  },
};
