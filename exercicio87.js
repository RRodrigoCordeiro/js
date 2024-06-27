// Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que contêm a letra "z".

const ArraydeString = (strings) => {
    return strings.filter(string => string.includes("z") || string.includes("Z"));
}
const strings = ["rodrigo","zebra","Zaqueiro","cordeiro","zangado"];
const NovoArray = ArraydeString(strings);

console.log(`As palavras do array que contêm a letra z ou Z são: ${NovoArray}`)