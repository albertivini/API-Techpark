const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Projeto Techpark para Cadastro de Aula' });
});

module.exports = router;
