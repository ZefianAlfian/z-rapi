// const DataStore = require("nedb");

// const db = new DataStore({
//   autoload: true,
//   filename: "./app/database/dbusers.db"
// });

// var doc = {
//   email: "zefianalfian78@gmail.com",
//   username: "rizqi",
// };

// // db.insert(doc)
// db.find({ username: "bbizqi" }, function (er, r) {
//   console.log(er);
// });

const moment = require("moment-timezone");

console.log(moment.tz("Asia/Jakarta").format("yy"))
