class Carro {
  marca;
  cor;
  gastoMedioKm;

  constructor(marca, cor, gastoMedioKm) {
    this.marca = marca;
    this.cor = cor;
    this.gastoMedioKm = gastoMedioKm;
  }

  calcularGastoPercurso(distancia, precoCombustivel){
    return distancia * this.gastoMedioKm * precoCombustivel
  }

}

const uno = new Carro('fiat', 'prata', 1/12);
console.log(uno.calcularGastoPercurso(70, 5))
const palio = new Carro('Fiat', 'Preto', 1/10)