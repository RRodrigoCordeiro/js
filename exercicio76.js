// Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja multiplicado por 4.

const ArraydeNumbers = (numbers) => {
    return numbers.map(string => string * 4);
}

const numbers = [2,4,8];
const NovoArray = ArraydeNumbers(numbers);


console.log(`Os números multiplicados por 4 do array são: ${NovoArray}`);