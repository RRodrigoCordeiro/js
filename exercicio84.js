//  Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja elevado à quinta potência.

const ArraydeNumbers = (numbers) => {
    return numbers.map(numbers => numbers ** 5)
    // return numbers.map(number => Math.pow(number,5));
}

const numbers = [1,2,3];
const NovoArray = ArraydeNumbers(numbers);

console.log(`Os números do array elevado a 5 potência são: ${NovoArray}`)
