const DataStore = require("nedb");

const db = new DataStore({
  autoload: true,
  filename: "./app/database/dbusers.db",
});

module.exports = { db };
