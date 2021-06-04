function separaCategoria(Categoria) {

    if (Categoria.length != 2 ) {

        console.log("Separa categoria " + Categoria)
        return Categoria
    } else {
        const Moto = Categoria.charAt(0)
        const Veiculo = Categoria.charAt(1)

        return {
            Moto,
            Veiculo
        }
    }
}

const catVeiculo = 'A'
const catInstrutor = 'AD'

const catSep = separaCategoria(catInstrutor)

function geraArray(categoria) {

    if (categoria == 'E') {
        return ['B','C','D','E']
    } else {
        if (categoria == 'D') {
            return ['B', 'C', 'D']
        } else {
            if (categoria == 'C') {
                return ['B', 'C']
            } else {
                return ['B']
            }
        }
    }
}

const teste = geraArray(catSep.Veiculo)

console.log(teste)

function elementoComum(array1, array2) {
      
    for(let i = 0; i < array1.length; i++) {
          
        for(let j = 0; j < array2.length; j++) {

            if(array1[i] === array2[j]) {
              
                return true;
            }
        }
    }
    return false; 
}

const testando = elementoComum(catVeiculo, teste)

console.log(testando)

function verificaVeiculoInstrutorMoto (catInstrutor, catVeiculo) {
    if (catInstrutor == catVeiculo) {
        return true
    } else {
        return false
    }
}

function verificaVeiculoInstrutor (catInstrutor, catVeiculo) {
    if (elementoComum(catInstrutor, catVeiculo)) {
        return true
    } else {
        return false
    }
}

// const instSep = separaCategoria(inst)

// const verificacaoMoto = verificaVeiculoInstrutorMoto(instSep.Moto, vv)

// console.log(verificacaoMoto)

// const verificacaoVeiculo = verificaVeiculoInstrutor (instSep.Veiculo, vv)

// console.log(verificacaoVeiculo)



const instrutor = 'AD'
const alun = 'B'
const vei = 'B'

const catSeparadaInstrutor = separaCategoria(instrutor)
const catSeparadaAluno = separaCategoria(alun)

const catArrayInstrutor = geraArray(catSeparadaInstrutor.Veiculo)

const catComumVeiculo = elementoComum(catArrayInstrutor, vei)
const catComumAluno = elementoComum(catArrayInstrutor, catSeparadaAluno)


if (!catComumVeiculo) {
    return res.send("Categoria do Instrutor e do Veículo não estão de acordo")
} else {
    if (!catComumAluno) {
        return res.send("Categoria do Instrutor e do Aluno não estão de acordo")
    } else {
        console.log("Aluno pode fazer aula")
    }

}