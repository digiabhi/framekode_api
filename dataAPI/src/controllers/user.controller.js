const { StatusCodes } = require("http-status-codes");
const { SuccessResponse, ErrorResponse } = require("../utils/common");
const { UserService } = require("../services");

async function getAllUsers(req, res) {
  try {
    const users = await UserService.getAllUsers(req.query);
    SuccessResponse.data = users.data;
    SuccessResponse.totalRecords = users.count;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

module.exports = {
  getAllUsers,
};
