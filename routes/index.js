var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'GabrielJ - Inicio'
  });
});

router.get('/blog/', function(req, res, next) {
  res.render('blog', {
    title: 'GabrielJ - Blog'
  });
});

router.get('/courses/', function(req, res, next) {
  res.render('courses', {
    title: 'GabrielJ - Cursos'
  });
});

router.get('/about/', function(req, res, next) {
  res.render('about', {
    title: 'GabrielJ - Sobre mi'
  });
});


module.exports = router;
