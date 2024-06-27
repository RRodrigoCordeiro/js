// Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja multiplicado por 5.

const ArraydeNumbers = (numbers) => {
    return numbers.map(number => number * 5)
}

const numbers = [5,10,15]
const NovoArray = ArraydeNumbers(numbers)

console.log(`Os números do array que multiplicado por 5 são: ${NovoArray}`)