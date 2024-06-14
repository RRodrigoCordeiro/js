// Crie um script que declare um array de números e utilize a função filter() para criar um novo array contendo apenas os números pares. Imprima o novo array.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const numbersPar = numbers.filter(numero => numero % 2 === 0 );

console.log(`Os números do pares do array são: ${numbersPar}`)
