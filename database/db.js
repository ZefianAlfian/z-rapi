var __path = process.cwd(),
    monk = require("monk"),
    { color } = require(__path + "/lib/color.js")

//Connection URL
var url = "";
try {
    if (url == '') throw console.log(color("Cek konfigurasi database, var url belum diisi", 'red'))
} catch (e) {
    return;
}

var db = monk(url);

db.then(() => {
    console.log(color("Berhasil connect ke database", 'green'))
})
.catch ((e) => {
    console.log(color("Error : " + e + "\n\nGagal connect ke database, \n\nCek konfigurasi database apakah connection URL sudah benar", 'green'))
})

module.exports = { db }
