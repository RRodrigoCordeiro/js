// Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que contêm a letra "y".

const ArraydeStrings = (strings) => {
    return strings.filter(string => string.includes("y") || string.includes("Y"))
}
const strings = ["rodrigo","yoga","cordeiro","Yakisoba"];
const NovoArray = ArraydeStrings(strings);

console.log(`As palavras no array qye contêm a letra são:${NovoArray}`)