// Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são ímpares.

const ArrayDeNumbers = (numbers) => {
    return numbers.filter(number => number % 2 !== 0);

}

const numbers = [1,3,4,5,6,8,10,9,99,18];
const NovoArray = ArrayDeNumbers(numbers);

// console.log(`Os números do array que são ímpares são: ${ArrayDeNumbers(NovoArray)}`)
console.log(`Os números do array que são ímpares são: ${NovoArray}`)