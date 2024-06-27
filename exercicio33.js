// Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja multiplicado por 3.

const ArrayDeNumbers = (numbers) => {
    return numbers.map(number => number * 3);
}
const numbers = [5,7,9,10,13,14,15];

console.log(`Os números múltiplicados por 3 do array são: ${ArrayDeNumbers(numbers)}`)
// console.log(`Os números múltiplicados por 3 do array são: ${NovoArray}`)