const numero = 2; 
let numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

for (let i = 1; i <= 10; i++) {
    const element = numero * i;
    console.log(element);
}
for (let i = 0; i < numeros.length; i++) {
    if(numeros[i]%2 === 0){
        console.log(numeros[i]);
    }
}