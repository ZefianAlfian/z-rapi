var __path = process.cwd(),
      monk = require('monk'),
     { color } = require(__path + '/lib/color.js')

// Connection URL
var url = 'mongodb+srv://zefianap:Zefian7387@zapi.voj3i.mongodb.net/zefian_rapi?retryWrites=true&w=majority';

var db = monk(url);

db.then(() => {
  console.log(color('Connected correctly to server, ZefianAlfian','green'))
})

module.exports = db
