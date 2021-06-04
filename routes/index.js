var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Projeto Techpark para Cadastro de Aula' });
});

module.exports = router;
