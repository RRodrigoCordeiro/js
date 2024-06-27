// Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são maiores que 25.

const ArraydeNumbers = (numbers) => {
    return numbers.filter(number => number > 25);
}
const numbers = [20,28,27,48,15];
const NovoArray = ArraydeNumbers(numbers);

console.log(`Os números do array que são menores que 25 são: ${NovoArray}`)