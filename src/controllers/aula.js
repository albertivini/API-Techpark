const Aula = require('../models/aula')
const util = require('../utils')
const moment = require('moment')

module.exports = {
    async show (req, res) {

        const dados = await Aula.findAll()
        return res.render('aula', { dados })

    },

    async moto (req, res) {
        return res.render('aulaMoto')
    },

    async carro (req, res) {
        return res.render('aulaCarro')
    },

    async aulacarro (req, res) {

        const cpf_instrutor = util.formataCPF(req.body.cpf_instrutor)
        const cpf_aluno = util.formataCPF(req.body.cpf_aluno)
        const placa = req.body.placa

        const placaUP = placa.toUpperCase()

        const confInstrutor = await Aula.findInstrutor(cpf_instrutor)
        const confAluno = await Aula.findAluno(cpf_aluno)
        const confVeiculo = await Aula.findVeiculo(placaUP)

        if (confInstrutor.cpf != cpf_instrutor || confAluno.cpf != cpf_aluno || confVeiculo.placa != placaUP) {
            res.send("Instrutor, aluno ou Veículo não está cadastrado")
        } else {

            const Instrutor = await Aula.findInstrutor(cpf_instrutor)
            const Aluno = await Aula.findAluno(cpf_aluno)
            const Veiculo = await Aula.findVeiculo(placaUP)

            const dataFront = moment(req.body.data).format('YYYY-MM-DD')

            const data_hora = dataFront + " " + req.body.hora

            // Verificações

            const testeHora = util.verificaHora(data_hora)

            const catArrayInstrutor = util.geraArrayGigante(Instrutor.categoria)
            const catArrayAluno = util.geraArrayGigante(Aluno.categoria)

            const confereVeiculo = util.elementoComum(catArrayInstrutor, Veiculo.categoria)
            const confereAluno = util.elementoComum(catArrayInstrutor, catArrayAluno)
            
            const confAgendaVeiculo = await Aula.confereAgendaVeiculo(Veiculo.id, data_hora)
            const confAgendaInstrutor = await Aula.confereAgendaInstrutor(Instrutor.id, data_hora)
            const confAgendaAluno = await Aula.confereAgendaAluno(Aluno.id, data_hora)
            
            const conferindoAgenda = util.confereAgenda(confAgendaVeiculo, confAgendaInstrutor, confAgendaAluno)

            // Verificações

            if (!confereVeiculo) {
                return res.send("Categoria do Instrutor e do Veículo não estão de acordo")
            } else {
                if (!confereAluno) {
                    return res.send("Categoria do Instrutor e do Aluno não estão de acordo")
                } else {
                    if (!testeHora) {
                        return res.send("Horário não permitido")
                    } else {
                        if (conferindoAgenda) {
                            return res.send("Aluno, Instrutor ou Veículo já tem aula nesse horário")
                        } else {
                            await Aula.createAula({
                                veiculos_id: Veiculo.id,
                                instrutores_id: Instrutor.id,
                                alunos_id: Aluno.id,
                                data: data_hora
                            })
                            res.send("Aula cadastrada")
                        }
                        }
                    }
                }
            }
    },

    async aulamoto (req, res) {

        const cpf_instrutor = util.formataCPF(req.body.cpf_instrutor)
        const cpf_aluno = util.formataCPF(req.body.cpf_aluno)
        const placa = req.body.placa

        const placaUP = placa.toUpperCase()

        const confInstrutor = await Aula.findInstrutor(cpf_instrutor)
        const confAluno = await Aula.findAluno(cpf_aluno)
        const confVeiculo = await Aula.findVeiculo(placaUP)

        if (confInstrutor.cpf != cpf_instrutor || confAluno.cpf != cpf_aluno || confVeiculo.placa != placaUP) {
            res.send("Instrutor, aluno ou Veículo não está cadastrado")
        } else {

            const Instrutor = await Aula.findInstrutor(cpf_instrutor)
            const Aluno = await Aula.findAluno(cpf_aluno)
            const Veiculo = await Aula.findVeiculo(placaUP)

            const dataFront = moment(req.body.data).format('YYYY-MM-DD')

            const data_hora = dataFront + " " + req.body.hora

            // Verificações

            const testeHora = util.verificaHora(data_hora)

            const catArrayInstrutor = util.geraArrayGigante(Instrutor.categoria)

            const confereVeiculo = util.elementoComum(catArrayInstrutor, Veiculo.categoria)
            const confereAluno = util.elementoComum(catArrayInstrutor, Aluno.categoria)
            
            const confAgendaVeiculo = await Aula.confereAgendaVeiculo(Veiculo.id, data_hora)
            const confAgendaInstrutor = await Aula.confereAgendaInstrutor(Instrutor.id, data_hora)
            const confAgendaAluno = await Aula.confereAgendaAluno(Aluno.id, data_hora)
            
            const conferindoAgenda = util.confereAgenda(confAgendaVeiculo, confAgendaInstrutor, confAgendaAluno)

            // Verificações

            if (!confereVeiculo) {
                return res.send("Categoria do Instrutor e do Veículo não estão de acordo")
            } else {
                if (!confereAluno) {
                    return res.send("Categoria do Instrutor e do Aluno não estão de acordo")
                } else {
                    if (!testeHora) {
                        return res.send("Horário não permitido")
                    } else {
                        if (conferindoAgenda) {
                            return res.send("Aluno, Instrutor ou Veículo já tem aula nesse horário")
                        } else {
                            
                            await Aula.createAula({
                                veiculos_id: Veiculo.id,
                                instrutores_id: Instrutor.id,
                                alunos_id: Aluno.id,
                                data: data_hora
                            })
                            res.send("Aula cadastrada")
                        }
                        }
                    }
                }
            }
    },
    
    async relatorio (req, res) {
        
        const dados = await Aula.findId(req.params.id)

        const instrutor = await Aula.findInstrutorUsingId(dados.instrutores_id)

        const aluno = await Aula.findAlunoUsingId(dados.alunos_id)

        const veiculo = await Aula.findVeiculoUsingId(dados.veiculos_id)

        res.render('relatorioAula', { dados, instrutor, aluno, veiculo })
    },

    async presenca(req, res) {
        const dados = await Aula.findId(req.params.id)

        const presenca = util.verificaPresenca(dados.data_hora)

        if (presenca) {
            await Aula.insertPresenca(req.params.id)
            return res.send("Presença confirmada")
        } else {
            return res.send("Ainda nao é possivel validar a presença")
        }
    }
}