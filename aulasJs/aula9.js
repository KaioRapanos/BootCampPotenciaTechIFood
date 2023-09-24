class Pessoa {
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

const vitor = new Pessoa('Vitor j Guerra',25);
const renan = new Pessoa('Renan J Paula',30);

console.log(vitor);
vitor.descrever();
renan.descrever();
