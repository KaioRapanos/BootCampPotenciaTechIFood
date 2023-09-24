const funcoes = require('./aula15.js');

const { gets, print } = funcoes;

const numerosSorteados = [];
for (let i = 0; i < 5; i++) {
    const numerosSorteado= gets();
    numerosSorteados.push(numerosSorteado);
}

let maiorValor = 0;

for (let i = 0; i < numerosSorteados.length; i++) {
    const numerosSorteado = numerosSorteados[i];
    if(numerosSorteado > maiorValor){
        maiorValor = numerosSorteado;
    }    
}
print(maiorValor);
print(gets());
print(gets());
print(gets());
print(gets());
print(gets());


