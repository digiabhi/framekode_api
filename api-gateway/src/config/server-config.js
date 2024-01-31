/* eslint-disable no-undef */
const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  PORT: process.env.PORT,
  SALT_ROUNDS: process.env.SALT_ROUNDS,
  JWT_EXPIRY: process.env.JWT_EXPIRY,
  JWT_SECRET: process.env.JWT_SECRET,
  MYSQL_DB_PASS: process.env.MYSQL_DB_PASS,
  MYSQL_DB_NAME: process.env.MYSQL_DB_NAME,
  MYSQL_DB_HOST: process.env.MYSQL_DB_HOST,
  DB: process.env.DB,
  ENV: process.env.ELK_ENV,
};
