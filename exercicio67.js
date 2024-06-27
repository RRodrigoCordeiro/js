//  Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que contêm a letra "u".

const ArraydeStrings = (strings) => {
    return strings.filter(string => string.includes("u") || string.includes("U"));
}

const strings = ["Rodrigo","Uva","Cordeiro","urubu"]
const NovoArray = ArraydeStrings(strings);

console.log(NovoArray)