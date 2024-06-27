//  Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que contêm a letra "o".

const ArrayDeString = (strings) => {
    return strings.filter(string => string.includes("o") || string.includes("O"))
}
const strings = ["rodrigo","cordeiro","tavares","CORDEIRO"];
const NovoArray = ArrayDeString(strings);

console.log(` As palavras do array que contêm apenas a letra o são: ${NovoArray}`)
