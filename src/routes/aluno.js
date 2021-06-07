const express = require('express')
const router = express.Router()
const AlunoController = require('../controllers/aluno')

router.get('/', AlunoController.show)

router.post('/cadastro', AlunoController.create)

router.get('/atualiza/:id', AlunoController.atualiza)

router.post('/update/:id', AlunoController.update)

router.post('/delete/:id', AlunoController.delete)

module.exports = router