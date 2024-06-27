//  Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja multiplicado por 8.

const ArraydeNumbers = (numbers) => {
    return numbers.map(number => number * 8);
}

const numbers = [1,2,3];
const NovoArray = ArraydeNumbers(numbers);

console.log(`Os números do array múltiplicados por 8 são: ${NovoArray}`)