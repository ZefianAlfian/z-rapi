const ErrorResponse = require("../utils/errorResponse");
const { insertUsers, readAllData } = require("../models/usersModel");
const { responseMessage } = require("../utils/responseHandler");
const moment = require("moment-timezone")

exports.createData = (req, res, next) => {
  const data = { ...req.body };
  if (!data.username) {
    next(new ErrorResponse("input key username", 400));
    return false;
  } else if (!data.password) {
    next(new ErrorResponse("input key password", 400));
    return false;
  } else if (!data.fullName) {
    next(new ErrorResponse("input key fullName", 400));
    return false;
  } else if (!data.email) {
    next(new ErrorResponse("input email", 400));
    return false;
  } else if (!data.email) {
    next(new ErrorResponse("input apikey", 400));
    return false;
  }

  data.date = new Date()
  insertUsers(res, data, next);
};


exports.readData = (req, res, next) => {
	readAllData(req, res, next);
}