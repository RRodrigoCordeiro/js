//  Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que começam com a letra "B".

const ArrayDeString = (strings) =>{
    return strings.filter( string => string.startsWith("b") || string.startsWith("B"))
}

const strings = ["beleza","Bala","rodrigo"];
const NovoArray = ArrayDeString(strings)

console.log(`As palavras do array que começam com B são: ${NovoArray}`)