const express = require('express')
const router = express.Router()
const AulaController = require('../controllers/aula')

router.get('/', AulaController.show)

router.get('/carro', AulaController.carro)

router.post('/carro', AulaController.aulacarro)

router.get('/moto', AulaController.moto)

router.post('/moto', AulaController.aulamoto)

router.get('/relatorio/:id', AulaController.relatorio)

router.post('/presenca/:id', AulaController.presenca)


module.exports = router