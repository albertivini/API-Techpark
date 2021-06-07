function separaCategoria(Categoria) {

    if (Categoria.length != 2 ) {
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

function formataCPF(cpf){

    const cpfDesformatado = cpf.replace(/[^\d]/g, "");

    const cpfAlterado = cpfDesformatado.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");

    return cpfAlterado

}

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

function verificaHora (data) {

    const dataBancoMS = Date.parse(data)
    const dataAtualMS = Date.now()

    const diferenca = dataBancoMS - dataAtualMS

    const diferencahora = diferenca / 3.6

    if (diferencahora <= 0) {
        return false
    } else {
        return true
    }
}

function verificaPresenca (data) {

    const dataBancoMS = Date.parse(data)
    const dataAtualMS = Date.now()

    const diferenca = dataBancoMS - dataAtualMS

    const diferencahora = diferenca / 3.6

    if (diferencahora <= 1) {
        return false
    } else {
        return true
    }
}

function testaCPF(cpf) {
    let Soma = 0
    let Resto = 0

  if (cpf == "00000000000") return false

  for (i=1; i<=9; i++) Soma = Soma + parseInt(cpf.substring(i-1, i)) * (11 - i)
  Resto = (Soma * 10) % 11

    if ((Resto == 10) || (Resto == 11))  Resto = 0
    if (Resto != parseInt(cpf.substring(9, 10)) ) return false

  Soma = 0
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(cpf.substring(i-1, i)) * (12 - i)
    Resto = (Soma * 10) % 11

    if ((Resto == 10) || (Resto == 11))  Resto = 0
    if (Resto != parseInt(cpf.substring(10, 11) ) ) return false
    return true
}

function testaPlaca(placa){

    const Placa = new RegExp("^[a-zA-Z]{3}[0-9]{4}$")
    const PlacaMercosul = new RegExp("^[a-zA-Z]{3}[0-9]{1}[a-zA-Z]{1}[0-9]{2}$")

    if(Placa.test(placa)){
        return true
        } else {
            if(PlacaMercosul.test(placa)){
                return true
            } else {
                return false
            }
        }
   }

function geraArrayGigante (categoria) {
    if (categoria == 'AE') {
        return ['A','B','C','D','E']
    } else {
        if (categoria == 'AD') {
            return ['A','B', 'C', 'D']
        } else {
            if (categoria == 'AC') {
                return ['A','B', 'C']
            } else {
                if (categoria == 'AB') {
                    return ['A', 'B']
                } else {
                    if (categoria == 'E') {
                        return ['B','C','D','E']
                    } else {
                        if (categoria == 'D') {
                            return ['B', 'C', 'D']
                        } else {
                            if (categoria == 'C') {
                                return ['B', 'C']
                            } else {
                                if (categoria == 'B') {
                                    return ['B']
                                } else {
                                    return ['A']
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

function confereAgenda (Veiculo, Instrutor, Aluno) {
    if ((Veiculo || Instrutor || Aluno) == true) {
        return true
    } else {
        return false
    }
}

module.exports = { separaCategoria, 
    formataCPF, 
    geraArray, 
    elementoComum, 
    verificaHora, 
    verificaPresenca, 
    testaCPF, 
    testaPlaca,
    geraArrayGigante,
    confereAgenda
}