const {
  createData,
  readData,
  findData,
} = require("../controllers/authController");
const express = require("express");
const rateLimit = require("express-rate-limit");
const router = express.Router();
// updateData,
// deleteData,

const createAccountLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour window
  max: 2, // start blocking after 5 requests
  handler: function (req, res, next) {
    next(new ErrorResponse(`Too many request form this IP`, 429));
  },
});

router.get("/register", createAccountLimiter, (req, res, next) => {
  res.render("register");
});

router.get("/login", createAccountLimiter, (req, res, next) => {
  res.render("login", { info: null });
});

router.get("/login/:info", createAccountLimiter, (req, res, next) => {
  res.render("login", !req.params.info ? {} : { info: req.params.info });
});

router.post("/register", createAccountLimiter, (req, res, next) => {
  createData(req, res, next);
});

router.post("/login", createAccountLimiter, (req, res, next) => {
  findData(req, res, next);
});

router.get("/read", createAccountLimiter, (req, res, next) => {
  readData(req, res, next);
});

module.exports = router;
