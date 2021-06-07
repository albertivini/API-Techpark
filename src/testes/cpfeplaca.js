function TestaCPF(cpf) {
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
var cpf = "95018840749";

const tt = TestaCPF(cpf)

console.log(tt)

function validarPlaca(placa){

    // const re = /ab+c/;
    // let re = new RegExp("ab+c");

    const Placa = new RegExp("^[a-zA-Z]{3}[0-9]{4}$")
    const PlacaMercosul = new RegExp("^[a-zA-Z]{3}[0-9]{1}[a-zA-Z]{1}[0-9]{2}$")

    // const regexPlaca = /^[a-zA-Z]{3}[0-9]{4}$/;
    // const regexPlacaMercosulCarro = /^[a-zA-Z]{3}[0-9]{1}[a-zA-Z]{1}[0-9]{2}$/;

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

const plc = 'mno1a01'

const tst = validarPlaca(plc)

console.log(tst)