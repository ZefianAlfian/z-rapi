const { responseData, responseMessage } = require("../utils/responseHandler");
const { db } = require("../config/database");
const ErrorResponse = require("../utils/errorResponse");

exports.insertUsers = (response, data, next) => {
  let { username, fullName, email, password, apikey = null, date } = data;
  let newData = {
    username,
    fullName,
    email,
    password,
    apikey,
    date,
  };
  db.insert(newData, (err, data) => {
    if (err) {
      next(new ErrorResponse(err, 500));
      return false;
    }
    console.log(data)
    responseMessage(response, 201, "Berhasil insert data!");
  });
};
