class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca,cor,gastoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularViagem(distancia,precoCombustivel){
        return this.gastoMedioPorKm * distancia * precoCombustivel;
    }
}

const astra = new Carro('Chevrolet','Azul',1/10);
console.log(astra);

let distancia = 73;
let precoCombustivel = 5.79;
console.log('O gasto medio da sua viagem foi de :'+astra.calcularViagem(distancia,precoCombustivel));