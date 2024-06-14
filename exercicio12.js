//  Crie um script que declare um array de números e utilize a função reduce() para calcular a soma de todos os números do array. Imprima o resultado.

const numbers =[1,2,3,4,5,6,7,8,9,10];

// const numbersSoma = numbers.reduce((total,number) =>  total + numbers.length,0);
// console.log(numbersSoma)

const numbersTotal = numbers.reduce((total,number) => total + number,0)
console.log(numbersTotal)