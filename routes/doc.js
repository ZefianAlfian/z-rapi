__path = process.cwd()

var express = require('express')
var router = express.Router()
var creatorList = ['@zefianalfian', '@isywl_','@rickoveriyanto','@zefianalfian', '@isywl_','@rickoveriyanto','@zefianalfian', '@isywl_','@rickoveriyanto']
var creator = creatorList[Math.floor(Math.random() * creatorList.length)]

/* GET users listing. */
router.get('/covid', (req, res, next) => {
    res.sendFile(__path + '/views/covid.html')
})

router.get('/igstalk', (req, res, next) => {
    res.sendFile(__path + '/views/igstalk.html')
})

router.get('/ttstalk', (req, res, next) => {
	res.sendFile(__path + '/views/ttstalk.html')
})

router.get('/infonpm', (req, res, next) => {
	res.sendFile(__path + '/views/infonpm')
})
router.get('/randomquote', (req, res, next) => {
	res.json({
        status : false,
        creator : `${creator}`,
        code : 406,
        message : 'maintenance'
    })
})

router.get('/ttdown-nowm', (req, res, next) => {
    res.json({
        status : false,
        creator : `${creator}`,
        code : 406,
        message : 'maintenance'
    })
})

router.get('/*', (req, res, next) => {
	res.sendFile(__path + '/views/404.html')
})

module.exports = router
