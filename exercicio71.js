//  Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que têm exatamente 8 caracteres.

const ArraydeString = (strings) => {
    return strings.filter(string => string.length === 8);
}

const strings = ["rodrigo","cordeiro","tavares","Relativo"];
const NovoArray = ArraydeString(strings);
console.log(`As palavras do array que tem exatamente 8 caracteres são: ${NovoArray}`)