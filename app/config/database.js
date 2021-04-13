const DataStore = require("nedb");

const db = new DataStore({
  autoload: true,
  filename: "./app/database/dbusers.db",
});

const dbWeb = new DataStore({
  autoload: true,
  filename: "./app/database/dbweb.db",
});

module.exports = { db, dbWeb };
