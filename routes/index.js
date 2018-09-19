var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.get('/register', function(req, res, next) {
  res.render('register.html', { title: 'Express' });
});

router.get('/logout', function(req, res, next) {
  res.render('logout.html', { title: 'Express' });
});

router.get('/home', function(req, res, next) {
  res.render('home.html', { title: 'Express' });
});

module.exports = router;
