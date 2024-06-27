// Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja multiplicado por 7.

const ArraydeNumbers = (numbers) => {
    return numbers.map( number => number * 7);
}

const numbers = [1,7,2];
const NovoArray = ArraydeNumbers(numbers)

console.log(`Os números do array multiplicado por 7 são: ${NovoArray}`)