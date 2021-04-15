const express = require("express");
const router = express.Router();
const { responseMessage } = require("../utils/responseHandler");
const ErrorResponse = require("../utils/errorResponse");
router.get("/", function (req, res, next) {
  if (!req.session.loggedin || req.session.loggedin != true) {
    res.redirect("../auth/login/n")
    return false;
  }
  res.status(200);
  res.render("api", { title: "Rizqi a.k.a Zefian", name: "ZRapi" });
});
module.exports = router;
