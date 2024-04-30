const {gets, print} = require('./fucaoAuxiliar')

const valorSalarioBruto = gets();
const adicionalDosBeneficios = gets();

function calcularPorcentagem(salario,percentual) {
  return salario * (percentual / 100)

}

function pergarPercentualComBaseNoSalario(salario) {
  if (salario >= 0 && salario <= 1100) {
    return 5;
  } else if (salario >= 1100.01 && salario <= 2500) {
    return 10;
  } else {
    return 15;
  }
}

const valorAtransferir = valorSalarioBruto - (calcularPorcentagem(valorSalarioBruto), pergarPercentualComBaseNoSalario(valorSalarioBruto))