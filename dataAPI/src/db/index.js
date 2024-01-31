const mysql = require("mysql2/promise");
const { DBConfig } = require("../config");

async function query(sql, params) {
  const connection = await mysql.createConnection(DBConfig.db);
  const [results] = await connection.execute(sql, params);

  return results;
}

module.exports = {
  query,
};
