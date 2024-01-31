const db = require("../db");

class CrudRepository {
  constructor(model, fields) {
    this.model = model;
    this.fields = fields;
  }

  async getAll(data) {
    try {
      const totalCount = await db.query(
        `SELECT COUNT(*) as totalRecords FROM ${this.model}`
      );
      const response = await db.query(
        `SELECT ${this.fields} FROM ${this.model} LIMIT ${data.pagination}`
      );
      const result = { response, totalCount };
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CrudRepository;
