const moment = require('moment');

const data = Date.now()

// console.log(data)

const datanova = moment(data).format('YYYY-MM-DD')

// console.log(datanova)

const string = "2021-06-03 16:00"

const dim = string.substring(0, 4)
// dim data q eu marquei

const dim2 = string.substring(5, 7)

const dim3 = string.substring(8, 10)

const dim4 = string.substring(11, 13)
const dim5 = string.substring(14)

console.log(dim)
console.log(dim2)
console.log(dim3)
console.log(dim4)
console.log(dim5)

const tt = Number(dim)

console.log(tt)

console.log(moment(data).format('YYYY-MM-DD HH:mm'))

const AnoHoje = moment(data).format('YYYY')
const MesHoje = moment(data).format('MM')
const DiaHoje = moment(data).format('DD')
const HoraHoje = moment(data).format('HH')


console.log( Ano + " " + Mes + " " + dia + " " + hora)

// data de hoje

if ( Number(dim) > Number(Ano)) { // 2021 != 2021 || 2021 > 2021
    console.log("ainda nao é possivel validar a presença")
} else {
    if ( Number(dim2) > Number(Mes)) { // 06 != 06 || 06 > 06
        console.log("ainda nao é possivel validar a presença")
    } else {
        if (Number(dim3) > Number(dia)) { // 02 != 03 || 02 > 03
            console.log("ainda nao é possivel validar a presença")
        } else {
            if (Number(dim4) >= Number(hora)) { // 08 != 16 || 08 > 16 
                console.log("ainda nao é possivel validar a presença")
            } else {
                console.log("Presença validada")
            }
        }
    }
}

console.log(Number(dim) > Number(Ano))
console.log(Number(dim2) > Number(Mes))
console.log(Number(dim3) > Number(dia))
console.log(Number(dim4) > Number(hora))




// const teste2 = datanova + " " + string

// console.log(teste2)


// const CategoriaInstrutor = 'A'
// const CategoriaAluno = 'B'
// CategoriaInstrutor.moto = undefined
// CategoriaAluno.moto = undefined


// if (CategoriaInstrutor.moto || CategoriaInstrutor.veiculo != CategoriaAluno.moto || CategoriaAluno.veiculo) {
//     console.log("Mama aqui") 
// } else {
//     console.log("Mama ali")
// }