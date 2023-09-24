

const aluno = 'João Gustavo Oliveira';

const aluno1 = {
    nome: 'João',
    idade: 25
}

const alunos = ['João', 'Vitor', 'Marina'];

console.log(alunos[0]+' '+aluno+' '+aluno1.nome);

alunos.push('Renan');
alunos[4] = 'Vinicius';

const notas = [];

notas.push(5,7,8,2,5,8);
console.log(notas.length);

for (let i = 0; i < alunos.length; i++) {
    console.log(alunos[i]);   
}

for (let i = 0; i < aluno.length; i++) {
    const letra = aluno[i];
    console.log(letra);    
}

let somaNotas = 0;

for (let i = 0; i < notas.length; i++) {
    let notaTirada = notas[i];
    somaNotas += notaTirada;
}
const media = somaNotas/notas.length;
console.log(media);