//  Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são menores que 50.

const ArrayDeNumbers = (numbers) => {
    return numbers.filter(number => number < 50)
}
const numbers = [1,50,48,10,100,55,38];
const NovoArray = ArrayDeNumbers(numbers)
console.log(`Nesse array os números que 50 são:${NovoArray}`)

