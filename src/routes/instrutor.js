const express = require('express')
const router = express.Router()
const InstrutorController = require('../controllers/instrutor')

router.get('/', InstrutorController.show)

router.post('/cadastro', InstrutorController.create)

router.get('/atualiza/:id', InstrutorController.atualiza)

router.post('/update/:id', InstrutorController.update)

router.post('/delete/:id', InstrutorController.delete)

module.exports = router