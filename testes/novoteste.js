function separaData(data) {

    const string = data

    const ano = string.substring(0, 4)
    const mes = string.substring(5, 7)
    const dia = string.substring(8, 10)
    const hora = string.substring(11, 13)

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


const d = 'cg fan 2015'
const p = 'OVH1506'
const pMod = Number(p)

console.log(d.length < 10 || p.length != 7 )


const st = 'ovh3010'

const stUP = st.toUpperCase()

console.log(stUP)