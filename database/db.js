var __path = process.cwd(),
      monk = require('monk'),
     { color } = require(__path + '/lib/color.js')

// Connection URL
var url = '***';

var db = monk(url);

db.then(() => {
  console.log(color('Connected correctly to server, ZefianAlfian','green'))
})

module.exports = db
