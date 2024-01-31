const CrudRepository = require("./crud.repository");

class UserRepository extends CrudRepository {
  constructor() {
    super("accounts", "username,fullname,mobileno,email,plan,mrp");
  }
}

module.exports = UserRepository;
