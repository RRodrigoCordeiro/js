// Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são maiores que 20.

const ArraydeNumbers = (numbers) => {
    return numbers.filter(number => number > 20);
}
const numbers = [10,23,28,15,20,48,43];
const NovoArray = ArraydeNumbers(numbers);

console.log(`Os números do array que são maiores que 20 são: ${NovoArray}`);
