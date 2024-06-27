// Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja decrementado em 2. 

const ArraydeNumbers = (numbers) => {
    return numbers.map(number => number - 2 );
}

const numbers = [2,5,4,8,10,12,8];
const NovoArray = ArraydeNumbers(numbers);
console.log(`Os números do array decrementado em 2 são:  ${NovoArray}`)