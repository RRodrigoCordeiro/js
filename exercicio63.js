//  Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que contêm a letra "i".

const ArraydeString = (strings) => {
    return strings.filter(string => string.includes("i"))
}
const strings = ["rodrigo","cordeiro","tavares","casa","vogais"];
const NovoArray = ArraydeString(strings)
console.log(`As palavras do array que contêm a letra i são: ${NovoArray} `)