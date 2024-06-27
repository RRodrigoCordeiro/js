//  Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja incrementado em 3.

const ArraydeNumbers = (numbers) => {
    return numbers.map(number => number + 3);
}
const numbers = [5,3,8,4];
const NovoArray = ArraydeNumbers(numbers);

console.log(`Os números incrementado em 3 são: ${NovoArray}`)