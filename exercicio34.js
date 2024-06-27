//  Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são divisíveis por 2.

const ArrayDeNumbers = (numbers) => {
    return numbers.filter(number => number % 2 === 0);
}
const numbers = [2,5,12,14,10,3,8,9];
const NovoArray = ArrayDeNumbers(numbers);
console.log(`Os números do array que são divisíveis por 2 são: ${ArrayDeNumbers(NovoArray)}`)
// console.log(`Os números do array que são divisíveis por 2 são: ${NovoArray}`)