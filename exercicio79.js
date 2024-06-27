//  Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que têm exatamente 9 caracteres.

const ArraydeString = (strings) => {
    return strings.filter(string => string.length === 9)
}

const strings = ["rodrigo","cordeiro","plenitude","tavares","impressão"]
const NovoArray = ArraydeString(strings);

console.log(`As palavras do array que tem exatamente 9 caracteres são: ${NovoArray}`)