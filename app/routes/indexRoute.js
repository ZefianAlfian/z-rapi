var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200)
  res.render('api', { title: 'Rizqi a.k.a Zefian', name:'ZRapi' });
});

module.exports = router;
