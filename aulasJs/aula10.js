class Pessoa{
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022-idade;
    }

    descrever() {
        console.log('Meu nome é '+this.nome+' e minha idade é '+this.idade);        
    }

}

function compararPessoas(p1,p2){
    if(p1.idade > p2.idade){
        console.log(p1.nome+' é mais velhor que '+p2.nome);
    }else if(p1.idade < p2.idade){
        console.log(p2.nome+' é mais velhor que '+p1.nome);
    }else {
        console.log(p1.nome+' tem a mesma idade que '+p2.nome);
    }
}

const vitor = new Pessoa('Vitor j Guerra',25);
const renan = new Pessoa('Renan J Paula',30);

compararPessoas(vitor, renan);