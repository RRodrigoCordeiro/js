// Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string tenha as vogais removidas. Utilize a função replace() para remover as vogais.

const ArrayDeString = (strings) => {
    return strings.map(string => string.replace(/[aeiouAEIO]/g,''))
}

const strings = ["Rodrigo","Cordeiro","Tavares"]
const NovoArray = ArrayDeString(strings)

console.log(`As palavras retirando as vocais são: ${NovoArray}`)