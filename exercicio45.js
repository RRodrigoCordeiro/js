// Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja dividido por 2.

const ArrayDeNumber = (numbers) => {
    return numbers.map(number => number / 2)

}
const numbers = [2,5,10,8,2];
const NovoArray = ArrayDeNumber(numbers);

console.log(`Os núemros do array divididos por 2 são: ${NovoArray}`)