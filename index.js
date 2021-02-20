var express = require('express');
const PORT = process.env.PORT || 8080 || 5000 || 3000
var { color } = require('./lib/color.js')

var mainrouter = require('./routes/main'),
    apirouter = require('./routes/api'),
    docrouter = require('./routes/doc')

var app = express()
app.set("json spaces",2)
app.use(express.static("public"))

app.use('/', mainrouter)
app.use('/doc', docrouter)
app.use('/api', apirouter)

app.listen(PORT, () => {
    console.log(color("Server running on port " + PORT,'green'))
})

module.exports = app
