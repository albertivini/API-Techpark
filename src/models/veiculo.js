const { update } = require('../controllers/aluno')
const Database = require('../db/config')

module.exports = {
    async findAll() {
        const db = await Database()

        const data = await db.all(`SELECT * FROM veiculos`)

        await db.close()

        return data
    },

    async findPlaca(placa) {
        const db = await Database()
        
        const data = await db.get(`SELECT placa FROM veiculos WHERE placa = "${placa}"`)

        db.close()

        if (data == undefined) {
            return false
        } else {
            return data
        }
    },

    async create(cadastroVeiculo) {

        try {
            const db = await Database()

            console.log("Create " + cadastroVeiculo.placa + " " + cadastroVeiculo.descricao + " " + cadastroVeiculo.categoria)

            await db.run(`INSERT INTO veiculos (
                placa,
                descricao,
                categoria
            ) VALUES (
                "${cadastroVeiculo.placa}",
                "${cadastroVeiculo.descricao}",
                "${cadastroVeiculo.categoria}"
                )`)
        
            await db.close()

        } catch (err) {
            throw err
        }
    },

    async findId(id) {
        const db = await Database()
        const data = await db.get(`SELECT * FROM veiculos WHERE id = ${id}`)
        await db.close()

        console.log("Dados recuperados do Id: " + data.placa )

        return data
    },

    async update(dados, id) {
        try{
            const db = await Database()

            console.log("Antes de fazer o update " + dados.categoria + id)

            await db.run(` UPDATE veiculos SET
            descricao = "${dados.descricao}",
            categoria = "${dados.categoria}"
            WHERE id = ${id}`)
    
            await db.close()
        } catch (err) {
            throw err
        }
    }, 
    
    async deleteVeiculo(id) {
        const db = await Database()
        db.run(`DELETE FROM veiculos WHERE id = ${id}`)
        db.close()
    }

}