
/*Objeto Literal*/ 
const pessoa = {
    nome: 'Vitor j Guerra',
    idade: 25,
    descrever: function(){
        console.log('Meu nome é '+this.nome+' e minha idade é '+this.idade);
    }
};

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa);

pessoa.altura = 1.69;

console.log(pessoa);
pessoa.descrever();