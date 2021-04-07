const express = require("express");
const router = express.Router();
router.get("/", function (req, res, next) {
  res.status(200);
  res.render("api", { title: "Rizqi a.k.a Zefian", name: "ZRapi" });
});
module.exports = router;
