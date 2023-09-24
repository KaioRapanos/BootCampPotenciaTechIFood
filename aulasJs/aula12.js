/*class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome,peso,altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc(){
        return this.peso/(Math.pow(this.altura,2));
    }
    classificarImc(){
        const imc = this.calcularImc();
        if (imc < 18.5) {
            return 'Abaixo do peso';
        } else if (imc >= 18.5 && imc < 25) {
            return 'Peso normal';
        } else if (imc >= 25 && imc < 30) {
            return 'Acima do peso';
        } else if (imc >= 30 && imc < 40) {
            return 'Obeso';
        } else {
            return 'Obesidade Grave';
        }
    }
}

const jose = new Pessoa('Jose', 70 , 1.75);
console.log(jose.nome+' Tem um imc de '+jose.calcularImc()+' '+jose.classificarImc());
const raph = new Pessoa('Raph', 88 , 1.75);
console.log(raph.nome+' Tem um imc de '+raph.calcularImc()+' '+raph.classificarImc());
const joana = new Pessoa('Joana', 52 , 1.63);
console.log(joana.nome+' Tem um imc de '+joana.calcularImc()+' '+joana.classificarImc());*/

    class Pessoa {
        nome;
        idade;

        constructor(nome, idade) {
            this.nome = nome;
            this.idade = idade;
        }

        descrever() {
            console.log(`Nome: ${this.nome}; Idade: ${this.idade};`);
        }
    }

    new Pessoa('Renan', 30).descrever();
