const { AppError } = require("../utils/errors/app-errors");

const { StatusCodes } = require("http-status-codes");

const { UserRepository } = require("../repositories");

const userRepository = new UserRepository();

async function getAllUsers(query) {
  const page = parseInt(query.page) || 1;
  const size = parseInt(query.size) || 100;
  let skipCount = (page - 1) * size;
  let pagination = skipCount + "," + size;
  let customFilter = { size, pagination };
  try {
    const users = await userRepository.getAll(customFilter);
    const usersData = {
      data: users.response,
      count: users.totalCount[0].totalRecords,
    };
    return usersData;
  } catch (error) {
    throw new AppError(
      "Cannot fetch data of all the users",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = { getAllUsers };
