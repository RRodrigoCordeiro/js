// Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são ímpares e menores que 20.

const ArraydeNumbers = (numbers) => {
    return numbers.filter(number => number % 2 !== 0 && number < 20);
}

const numbers = [7,20,3,17,23,1];
const NovoArray  = ArraydeNumbers(numbers);

console.log(`Os números do array que são ímpares e menores que 20 são: ${NovoArray}`)