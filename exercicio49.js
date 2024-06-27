//  Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são divisíveis por 7.

const ArrayDeNumbers = (numbers) => {
    return numbers.filter(number => number % 7 === 0);
}

const numbers = [7,5,14,3,21];
const NovoArray = ArrayDeNumbers(numbers);

console.log(`Os números que são divisíveis por 7 no array são: ${NovoArray}`)