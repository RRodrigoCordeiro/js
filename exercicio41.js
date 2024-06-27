// Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja incrementado em 5.

const ArrayDeNumbers = (numbers) => {
    return numbers.map(number => number + 5);

}

const numbers = [1,2,3,4,5];
const NovoArray = ArrayDeNumbers(numbers);

console.log(`Os números incrementados em 5 são: ${NovoArray}`)