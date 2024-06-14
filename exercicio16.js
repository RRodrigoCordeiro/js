// Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja elevado ao quadrado.

const number = [1,2,3,4,5,6,7,8,9,10]
function NovoArray (number){
    return number.map(number =>  number * number );
}
console.log(`Esses números são os valores ao quadrado do array number: ${NovoArray(number)}`)