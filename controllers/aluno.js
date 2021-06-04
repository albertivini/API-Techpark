const Aluno = require('../models/aluno')
const Aula = require('../models/aula')
const util = require('../utils')

module.exports = {

    async show (req, res) {

        const data = await Aluno.findAll()

        return res.render('aluno', { data })
    },

    async create (req, res) {

        const cpfFormatado = util.formataCPF(req.body.cpf)

        const conferencia = await Aluno.findCPF(cpfFormatado)

        console.log("Conferencia: " + conferencia.cpf)

        if(conferencia == cpfFormatado) {
            return res.send("Aluno já cadastrado")
        } else {

            const testenome = req.body.nome
            const testecpf = req.body.cpf

            if (testenome.length <= 10 || testecpf.length != 11 ) {
                return res.send("Nome ou CPF inválidos")
            } else {
                try {
                    await Aluno.create({
                        cpf: req.body.cpf,
                        nome: req.body.nome,
                        categoria: req.body.cat
                    })
        
                    cpf = req.body.cpf
        
                    console.log(cpf)
        
                    await Aluno.mask(cpf)
        
                    return res.redirect('/aluno')
                } catch (err) {

                }
            }

        }
    },

    async atualiza (req, res) {

        const dados = await Aluno.findId(req.params.id)

        console.log("Dados chegaram no controller atualiza " + dados.nome)

        return res.render('atualiza', {dados})
    },

    async update (req, res) {

        const dados = {
            nome: req.body.nome,
            categoria: req.body.cat
        }

        const id = req.params.id

        console.log("dados vindo do front " + dados.nome + "id: " + id )

        await Aluno.update(dados, id)

        return res.send("Cadastro atualizado")
    },
    async delete(req, res) {
        const id = req.params.id

        const buscaAgenda = await Aula.findAlunoAtAula(id)

        if (buscaAgenda) {
            return res.send("Aluno não pode ser deletado pois já teve aula marcada")
        } else {
            await Aluno.deleteAluno(id)
            return res.send("Aluno deletado")
        }
    }
}