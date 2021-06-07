const Database = require('../db/config')

module.exports = {
    async findAll() {

        const db = await Database()

        const data = await db.all(`SELECT * FROM aulas`)

        await db.close()

        return data
    },

    async findId (id) {

        const db = await Database()

        const data = await db.get(`SELECT * FROM aulas WHERE id = ${id}`)

        await db.close()

        return data
    },

    async findVeiculo(placa) {

        const db = await Database()

        const veiculo = await db.get(`SELECT * FROM veiculos WHERE placa = "${placa}"`)

        await db.close()

        if (veiculo == undefined) {
            return false
        } else {
            return veiculo
        }
    },

    async findInstrutor(cpf) {
        const db = await Database()

        const instrutor = await db.get(` SELECT *, REPLACE(REPLACE(REPLACE(cpf,'.', ''),'-', ''),'/', '') AS cpf_unmask FROM instrutor WHERE cpf = "${cpf}"`)

        await db.close()

        if (instrutor == undefined) {
            return false
        } else {
            return instrutor
        }
    },

    async findAluno(cpf) {
        const db = await Database()

        const aluno = await db.get(` SELECT *, REPLACE(REPLACE(REPLACE(cpf,'.', ''),'-', ''),'/', '') AS cpf_unmask FROM alunos WHERE cpf = "${cpf}"`)

        await db.close()

        if (aluno == undefined) {
            return false
        } else {
            return aluno
        }
    },

    async createAula (cadastroAula) {
        const db = await Database()

        await db.run(` INSERT INTO aulas (
            veiculos_id,
            instrutores_id,
            alunos_id,
            data_hora
        ) VALUES (
            ${cadastroAula.veiculos_id},
            ${cadastroAula.instrutores_id},
            ${cadastroAula.alunos_id},
            "${cadastroAula.data}" 
        )`)

        db.close()
    },

    async findInstrutorUsingId (id) {
        const db = await Database()

        const instrutor = await db.get(` SELECT * FROM instrutor WHERE id = ${id}`)

        await db.close()

        return instrutor
    },

    async findAlunoUsingId (id) {
        const db = await Database()

        const aluno = await db.get(` SELECT * FROM alunos WHERE id = ${id}`)

        await db.close()

        return aluno 
    },

    async findVeiculoUsingId (id) {
        const db = await Database()

        const veiculo = await db.get(` SELECT * FROM veiculos WHERE id = ${id}`)

        await db.close()

        return veiculo
    },

    async insertPresenca (id) {
        const db = await Database()
        
        await db.run(` UPDATE aulas SET 
            presente = true WHERE id = ${id}
            `)

        db.close()
    },

    async findAlunoAtAula (id) {
        const db = await Database()

        const aluno = await db.get(` SELECT alunos_id FROM aulas WHERE alunos_id = ${id}`)
        
        db.close()

        if (aluno == undefined) {
            return false
        } else {
            return true
        }
    },

    async findInstrutorAtAula (id) {
        const db = await Database()

        const instrutor = await db.get(` SELECT instrutores_id FROM aulas WHERE instrutores_id = ${id}`)
        
        db.close()

        if (instrutor == undefined) {
            return false
        } else {
            return true
        }
    },

    async findVeiculoAtAula (id) {
        const db = await Database()

        const veiculo = await db.get(` SELECT veiculos_id FROM aulas WHERE veiculos_id = ${id}`)
        
        db.close()

        if (veiculo == undefined) {
            return false
        } else {
            return true
        }
    },

    async confereAgendaVeiculo (idVeiculo, data) {
        const db = await Database()
        
        const agenda = await db.get(` SELECT veiculos_id FROM aulas WHERE veiculos_id = ${idVeiculo} AND data_hora = "${data}"`)
        
        db.close()

        if (agenda == undefined) {
            return false
        } else {
            return true
        }
    },

    async confereAgendaInstrutor (idInstrutor, data) {
        const db = await Database()
        
        const agenda = await db.get(` SELECT instrutores_id FROM aulas WHERE instrutores_id = ${idInstrutor} AND data_hora = "${data}"`)
        
        db.close()

        if (agenda == undefined) {
            return false
        } else {
            return true
        }
    },
    
    async confereAgendaAluno (idAluno, data) {
        const db = await Database()
        
        const agenda = await db.get(` SELECT alunos_id FROM aulas WHERE alunos_id = ${idAluno} AND data_hora = "${data}"`)
        
        db.close()

        if (agenda == undefined) {
            return false
        } else {
            return true
        }
    }        
}