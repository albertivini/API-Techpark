const express = require('express')
const router = express.Router()
const veiculoController = require('../controllers/veiculo')

router.get('/', veiculoController.show)

router.post('/cadastro', veiculoController.create)

router.get('/atualiza/:id', veiculoController.atualiza)

router.post('/update/:id', veiculoController.update)

router.post('/delete/:id', veiculoController.delete)

module.exports = router