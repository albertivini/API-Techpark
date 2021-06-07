const Database = require('../db/config')

module.exports = {

    async findAll() {
        const db = await Database()

        const data = await db.all(`SELECT * FROM alunos`)

        await db.close()

        return data
    },

    async findCPF(cpf) {

        const db = await Database()
        const data = await db.get(`SELECT cpf FROM alunos WHERE cpf = "${cpf}"`)
        
        await db.close()

        if (data == undefined) {
            return false
        } else {
            return data
        }

    },

    async create(cadastro) {

        try {
            const db = await Database()

            await db.run(`INSERT INTO alunos (
                cpf,
                nome,
                categoria
            ) VALUES (
                "${cadastro.cpf}",
                "${cadastro.nome}",
                "${cadastro.categoria}"
            )`)
    
            await db.close()
        } catch (err) {
            throw err
        }
    },

    async findId(id) {
        const db = await Database()
        const data = await db.get(`SELECT * FROM alunos WHERE id = ${id}`)
        await db.close()

        return data
    },

    async update(dados, id) {
        try{
            const db = await Database()

            await db.run(` UPDATE alunos SET
            nome = "${dados.nome}",
            categoria = "${dados.categoria}"
            WHERE id = ${id}`)
    
            await db.close()
        } catch (err) {
            throw err
        }
    },

    async mask(cpf) {
        const db = await Database()

        console.log("Mascara para o CPF " + cpf)

        await db.run(`UPDATE alunos
        SET cpf = SUBSTR(cpf,1,3) || '.' || SUBSTR(cpf,4,3) || '.' || SUBSTR(cpf,7,3) || '-' || SUBSTR(cpf,10,2) WHERE cpf = "${cpf}"`)

        await db.close()
    },
    
    async deleteAluno(id) {
        const db = await Database()
        db.run(`DELETE FROM alunos WHERE id = ${id}`)
        db.close()
    }
}