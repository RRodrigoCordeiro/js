//  Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são múltiplos de 4.

const ArrayDeNumber = (numbers) => {
    return numbers.filter(number => number % 4 === 0 );
}

const numbers = [4,5,8,16,32,10]
const NovoArray = ArrayDeNumber(numbers);

console.log(`Os números do array que são múltiplos de 4 são:${NovoArray}`)