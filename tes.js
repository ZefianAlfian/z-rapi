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

//const moment = require("moment-timezone");

//console.log(moment.tz("Asia/Jakarta").format("yy"))


const axios = require("axios");

axios.post("http://localhost:3000/users/read", {
	username: "zef",
	password: "123",
	fullName: "ZefianAlfian",
	email: "tryaha78@gmail.com",
	apikey: "0987654321"
})
.then(data => console.log(data.data))
.catch(er => console.log(er.toJSON()));