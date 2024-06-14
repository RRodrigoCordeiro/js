//  Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são múltiplos de 3.

const number = [1,2,3,4,5,6,7,8,9,10]

function NovoArray (number) {
    return number.filter(number => number % 3 === 0 )
}
console.log(`nesse array tem 10 números, mas os números que são múltiplo de 3 são: ${NovoArray(number)}`)