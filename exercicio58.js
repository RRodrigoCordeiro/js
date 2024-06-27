// Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string tenha a primeira e a última letra em minúscula. Utilize a função toLowerCase() para converter as letras.

const ArraydeString = (strings) => {
    return strings.map(string => string[0].toLowerCase() + string.slice(1,-1) + string[string.length -1].toLowerCase())
}
const strings = ["RODRIGO","CORDEIRO"]
const NovoArray = ArraydeString(strings);

console.log(`O array com a primeira e a última letra em minúsculo são:${NovoArray}`)

