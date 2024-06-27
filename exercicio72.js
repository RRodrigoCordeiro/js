//  Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja decrementado em 4.

const ArraydeNumbers = (numbers) => {
    return numbers.map(number => number - 4);
}

const numbers = [4,8,10];
const NovoArray = ArraydeNumbers(numbers);

console.log(`Os números do array decrementado em 4 são:${NovoArray}`)