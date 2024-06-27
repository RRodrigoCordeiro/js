//  Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja elevado à quarta potência.

const ArraydeNumbers = (numbers) => {
    // return numbers.map(number => number ** 4);
    return numbers.map(number => Math.pow(number,4));
    // return numbers.map(string => number * number * number * number);
}
const numbers = [1,2,3]
const NovoArray = ArraydeNumbers(numbers)

console.log(`Os números do array elevado à quarta potência são: ${NovoArray}`)