// Crie um script que declare um array de números e utilize um loop while para calcular a soma de todos os números do array. Imprima o resultado.

const number = [1, 2, 3, 4, 5];

let sum  = 0;
let i = 0
while (i < number.length) {
    sum +=number[i];
    i++;
}
console.log(`O array tem 5 números e a soma desses números são de: ${sum}`)


// const numbers = [1, 2, 3, 4, 5];
// let sum = 0;
// let i = 0;
// while (i < numbers.length) {
//     sum += numbers[i];
//     i++;
// }
// console.log("A soma de todos os números é: " + sum);
