function escrevaNome(nome){
    return 'Meu nome é: '+ nome;
}
escrevaNome('Kaio');
escrevaNome('Cezar');

function verificarIdade(idade){
    if(idade >= 18){
        console.log(escrevaNome('Kaio')+' Maior de idade');
    }else {
        console.log('Menor de idade');
    }
}

verificarIdade(18);