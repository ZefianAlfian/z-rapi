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
    responseMessage(response, 201, "Berhasil insert data!");
  });
};

exports.findAllData = (req, data, res, next) => {
  db.findOne(
    { username: data.username, password: data.password, email: data.email },
    (err, result) => {
      if (err) {
        next(new ErrorResponse(er, 500));
        return false;
      }
      req.session.loggedin = true;
      responseData(res, 201, result);
    }
  );
};

exports.readAllData = (req, response, next) => {
  db.find({}, (er, data) => {
    if (er) {
      next(new ErrorResponse(er, 500));
      return false;
    }
    responseData(response, 201, data);
  });
};
