//  Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são menores que 35.

const ArraydeNumbers = (numbers) => {
    return numbers.filter(number =>  number < 35);
}

const numbers = [40,3,41,37,18];

const NovoArray = ArraydeNumbers(numbers);

console.log(`Os números do array que menores que 35 são: ${NovoArray}`);