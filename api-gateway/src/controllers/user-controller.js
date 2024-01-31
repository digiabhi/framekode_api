const { StatusCodes } = require("http-status-codes");

const { UserService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");
const { Logger } = require("../config");

/**
 * POST : /signup
 * req-body {email: 'xyz@kuonitumlare.com', password: 'DemoPassword'}
 */
async function signup(req, res) {
  try {
    const user = await UserService.create({
      email: req.body.email,
      password: req.body.password,
    });
    res.user = req.body.email;
    SuccessResponse.data = user;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    Logger.error(error);
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

async function signin(req, res) {
  try {
    const user = await UserService.signin({
      email: req.body.email,
      password: req.body.password,
    });
    res.user = req.body.email;
    SuccessResponse.data = user;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    Logger.error(error);
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

async function addRoletoUser(req, res) {
  try {
    const user = await UserService.addRoletoUser({
      role: req.body.role,
      id: req.body.id,
    });
    res.user = req.body.email;
    SuccessResponse.data = user;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    Logger.error(error);
    return res.status(error.statusCode).json(ErrorResponse);
  }
}
module.exports = {
  signup,
  signin,
  addRoletoUser,
};
