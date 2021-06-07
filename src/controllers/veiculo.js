const Veiculo = require('../models/veiculo')
const Aula = require('../models/aula')
const util = require('../utils')

module.exports = {
    async show(req, res) {

        const dados = await Veiculo.findAll()
        return res.render('veiculo', { dados })
    },

    async create(req, res) {

        const validaPlaca = util.testaPlaca(req.body.placa)

        if (validaPlaca) {
            
        const placa = req.body.placa

        const placaUP = placa.toUpperCase()

        const conferencia = await Veiculo.findPlaca(placaUP) 

        if (conferencia.placa == placaUP) {
            return res.send("Veiculo já cadastrado")
        } else {

            const testedescricao = req.body.descricao
            const testeplaca = req.body.placa

            if (testedescricao.length < 10 || testeplaca.length != 7 ) {
                res.send("Placa ou Descrição inválidos")
            } else {
                try {
                    await Veiculo.create({
                        placa: placaUP,
                        descricao: req.body.descricao,
                        categoria: req.body.cat
                    })
        
                    res.send("Veículo cadastrado")
                } catch (err) {
                    throw err
                }
            }
        }
        } else {
            return res.send("Veículo não existe")
        }
    },

    async atualiza(req, res) {

        const dados = await Veiculo.findId(req.params.id)
        res.render('atualizaVeiculo', { dados } )
    
    },

    async update(req, res) {
        
        const id = req.params.id

        await Veiculo.update({
            descricao: req.body.descricao,
            categoria: req.body.cat
        }, id)

        return res.send("Veiculo atualizado")
    },
    
    async delete(req, res) {
        const id = req.params.id

        const buscaAgenda = await Aula.findVeiculoAtAula(id)

        if (buscaAgenda) {
            return res.send("Veiculo não pode ser deletado pois já teve aula marcada")
        } else { 
            await Veiculo.deleteVeiculo(id)
            return res.send("Veiculo Deletado")
        }
    }
}