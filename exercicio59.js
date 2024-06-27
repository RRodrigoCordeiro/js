// Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que têm mais de 7 caracteres.

const ArraydeString = (strings) => {
    return strings.filter(string => string.length > 7);
}

const strings = ["rodrigo","cordeiro","tavares"];
const NovoArray = ArraydeString(strings);

console.log(`Os palavras no array que tem mais de 7 caracteres são: ${NovoArray}`)