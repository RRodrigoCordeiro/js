// Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são múltiplos de 6.

const ArraydeNumbers = (numbers) => {
    return numbers.filter(number => number % 6 === 0);
}

const numbers = [1,48,2,3,6,12];
const NovoArray = ArraydeNumbers(numbers)

console.log(`Os números do array múltiplos de 6 são:${NovoArray}`)