// 1) Faça um algoritmo que imprima todos os números ímpares no intervalo entre 1 e 30 (incluindo ambos).

for(var i = 0; i <= 30; i++){
    if(i % 2 !=0){
        console.log(i)
    }
}

// 2) Faça um algoritmo que imprima a quantidade de números multiplos de 7 intervalo entre 1 e 70 (incluindo ambos).
var num = 0;
for(var i = 1; i <= 70; i++){
        if(i % 7 == num){  
        num += i;
        console.log(num);
    }
}

// 3) Faça um algoritmo que imprima a quantidade de números pares e a quantidade de números ímpares em um intervalo digitado pelo usuário.

var num1 = parseInt(prompt("Digite algum numero: "));
var num2 = parseInt(prompt("Digite algum numero: "));

var par = 0;
var impar = 0;

for(var i = num1; i <= num2; i++){
    if(i % 2 == 0){
        par++
    } else {
        impar++
    }
}
console.log("Par: "+ par+ "\n" + "Impar: " +impar);

// 4) Faça um algoritmo que imprima a soma dos números multiplos de 11 em um intervalo digitado pelo usuário;

var num1 = parseInt(prompt("Digite algum numero: "));
var num2 = parseInt(prompt("Digite outro numero: "));

var num = 0;

for(var i = num1; i <= num2; i++){
    if(i % 11 == num){
        num += i;
    }
}
console.log(num)

// 5) Faça um algoritmo que imprima o somatório de todos os números entre 1 e um valor digitado pelo usuário. 
// Por exemplo, se o usuário digitar o número 4, o programa deverá calcular o somatório 1 + 2 + 3 + 4 = 10.

var num1 = parseInt(prompt("Digite algum numero: "));

var soma = 0;

for(var i = 1; i <= num1; i++){
    soma = soma + i
    
}
console.log(soma)