const moment = require('moment');

function separaData(data) {

    const string = data

    const ano = string.substring(0, 4)
    const mes = string.substring(5, 7)
    const dia = string.substring(8, 10)
    const hora = string.substring(11, 13)
    const minuto = string.substring(14)

    return {
        ano,
        mes,
        dia,
        hora
    }

}

const data = "2021-06-03 16:00"

const teste = separaData(data)

console.log(teste.hora)



const dataho = "2021-06-04 16:00"


function verificaHora (data) {

    const ttt = Date.parse(data)
    const aaa = Date.now()

    const diferenca = ttt - aaa

    const diferencahora = diferenca / 3.6

    if (diferencahora <= 0) {
        return false
    } else {
        return true
    }
}

const adocica = verificaHora(dataho)

console.log(adocica)

function verificaPresenca (data) {

    const ttt = Date.parse(data)
    const aaa = Date.now()

    const diferenca = ttt - aaa

    const diferencahora = diferenca / 3.6

    if (diferencahora <= 1) {
        return false
    } else {
        return true
    }
}

const auau = "2021-06-03 21:00"

const abecede = verificaPresenca (auau)

console.log(abecede)

const nn = true
const mm = false
const oo = false

function confereAgenda (Veiculo, Instrutor, Aluno) {
    if ((Veiculo || Instrutor || Aluno) == true) {
        return true
    } else {
        return false
    }
}

const almoco = confereAgenda(nn, mm, oo)

console.log(almoco)