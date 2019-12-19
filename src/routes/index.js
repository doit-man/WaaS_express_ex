var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/placelist', function(req, res, next) {
  res.send('["p", "o", "w", "e", "r"]');
})

module.exports = router;


// http://localhost:5000/placelist