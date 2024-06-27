// Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que começam com a letra "D".


const ArraydeString = (strings) => {
    return strings.filter(string => string.startsWith("d") || string.startsWith("D"));
}

const strings = ["Dedo","Rodrigo","dado"];
const NovoArray = ArraydeString(strings)

console.log(`As palavras no array que começam com a letra D ou d são: ${NovoArray}`)