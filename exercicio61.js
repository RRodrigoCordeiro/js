//  Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são menores que 30.

const ArraydeNumbers = (numbers) => {
    return numbers.filter(number => number < 30);
}

const numbers = [30,20,58,10,8,29];
const NovoArray = ArraydeNumbers(numbers)

console.log(`Os números do array menores que 30 são: ${NovoArray}`);