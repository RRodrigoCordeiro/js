// Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são ímpares e maiores que 15. 

const ArraydeNumbers = (numbers) => {
    return numbers.filter(number => number % 2 !== 0 && number > 15)
}

const numbers = [3,7,18,20,25,47];
const NovoArray = ArraydeNumbers(numbers)

console.log(`Os números do array que são ímpares e maiores que 15 são: ${NovoArray}`)



