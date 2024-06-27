// Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são múltiplos de 9. 

const ArraydeNumbers = (numbers) => {
    return numbers.filter(number => number % 9 === 0);
}

const numbers = [3,9,8,18,90];
const NovoArray = ArraydeNumbers(numbers);

console.log(`Os números do array que são múltiplos de 9 são: ${NovoArray}`)