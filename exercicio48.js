// Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja elevado ao cubo.

const ArrayDeNumbers = (numbers) => {
    // return numbers.map(number => number * number * number);
    return numbers.map(number => Math.pow(number,3));

   
}

const numbers = [5,10,15]
const NovoArray = ArrayDeNumbers(numbers);

console.log(`Os números dos arrays elevado ao cubo são:${NovoArray}`)