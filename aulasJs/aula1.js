let nota1 = 5;
let nota2 = 3;
let nota3 = 7;

let mediaNotas = (nota1+nota2+nota3)/3;
console.log(mediaNotas)
if(mediaNotas < 5){
    console.log('Reprovado');
}else if(mediaNotas >= 5 && mediaNotas <=7){
    console.log('Recuperação');
}else {
    console.log('Aprovado')
}