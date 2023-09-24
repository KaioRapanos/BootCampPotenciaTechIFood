let valorEtanol = 5.79;
let valorGasolina = 6.66;
let tipoCombustivel = 'Etanol';
let kmPorLitro = 10;
let distanciaEmKm = 100;

let litrosConsumidos = distanciaEmKm / kmPorLitro
let valorGasto;

if (tipoCombustivel === 'Etanol') {
    valorGasto = litrosConsumidos * valorEtanol;
    console.log(valorGasto.toFixed(2));
}
else {
    valorGasto = litrosConsumidos * valorGasolina;
    console.log(valorGasto.toFixed(2));
}


