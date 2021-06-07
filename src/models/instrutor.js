const Database = require('../db/config')

module.exports = {
    async findAll() {
        const db = await Database()

        const data = await db.all(`SELECT * FROM instrutor`)

        await db.close()

        return data
    },

    async findCPF(cpf) {
        console.log("CPF que veio do front: " + cpf)

        const db = await Database()
        const data = await db.get(`SELECT cpf FROM instrutor WHERE cpf = "${cpf}"`)
        await db.close()

        if (data == undefined) {
            return false
        } else {
            return data
        }
    },

    async create (cadastroInstrutor) {
        try {
            const db = await Database()

            await db.run(`INSERT INTO instrutor (
                cpf,
                nome,
                categoria
            ) VALUES (
                "${cadastroInstrutor.cpf}",
                "${cadastroInstrutor.nome}",
                "${cadastroInstrutor.categoria}"
            )`)
    
            await db.close()
        } catch (err) {
            throw err
        }
    },

    async findId(id) {
        const db = await Database()
        const data = await db.get(`SELECT * FROM instrutor WHERE id = ${id}`)
        await db.close()

        return data
    },

    async update(dados, id) {
        try{
            const db = await Database()

            console.log("Antes de fazer o update " + dados.nome + dados.cat + id)

            await db.run(` UPDATE instrutor SET
            nome = "${dados.nome}",
            categoria = "${dados.categoria}"
            WHERE id = ${id}`)
    
            await db.close()
        } catch (err) {
            throw err
        }
    },

    async deleteInstrutor(id) {
        const db = await Database()
        db.run(`DELETE FROM instrutor WHERE id = ${id}`)
        db.close()
    },

    async mask(cpf) {
        const db = await Database()

        await db.run(`UPDATE instrutor
        SET cpf = SUBSTR(cpf,1,3) || '.' || SUBSTR(cpf,4,3) || '.' || SUBSTR(cpf,7,3) || '-' || SUBSTR(cpf,10,2) WHERE cpf = "${cpf}"`)

        await db.close()
    }
}