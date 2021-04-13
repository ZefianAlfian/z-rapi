const {
  createData,
  readData,
  updateData,
  deleteData,
} = require("../controllers/usersController");
const express = require("express");
const router = express.Router();

//router.route('/').post(createData).get(readData);

//router.route('/:id').put(updateData).delete(deleteData);

router.get("/register", (req, res, next) => {
  res.render("register");
});

router.get("/login", (req, res, next) => {
  res.render("login");
});

router.post("/register", (req, res, next) => {
  createData(req, res, next);
});

router.get("/read", (req, res, next) => {
  readData(req, res, next);
});

module.exports = router;
