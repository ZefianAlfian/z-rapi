var express = require("express")
const PORT = process.env.PORT || 5000
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
    console.log(color("Server running on port 3000",'green'))
})

module.exports = app
