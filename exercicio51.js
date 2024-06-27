// Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que têm exatamente 6 caracteres.

const ArrayDeString = (strings) => {
    return strings.filter( string => string.length === 6);
}

const strings = ["rodrigo","cordeiro","escopo","tavares","sessão"]
const NovoArray = ArrayDeString(strings)

console.log(`As palavras que tem examente 6 caracteres são: ${NovoArray}`)