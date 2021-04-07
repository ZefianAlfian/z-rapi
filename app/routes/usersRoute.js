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
router.post("/", (req, res, next) => {
  createData(req, res, next);
});

module.exports = router;
