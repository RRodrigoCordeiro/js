// Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja multiplicado por 10.

const ArrayDeNumbers = (numbers) => {
    return numbers.map(number => number * 10);
}

const numbers = [10,20,30,40,50,60,70,80,90,100]
const NovoArray = ArrayDeNumbers(numbers);

console.log(`Os números do array multiplicado por 10 são: ${ArrayDeNumbers(NovoArray)}`)
// console.log(`Os números do array multiplicado por 10 são: ${NovoArray}`)