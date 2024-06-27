// Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string tenha a primeira e a última letra em maiúscula. Utilize a função toUpperCase() para converter as letras.

const ArrayDeString = (strings) => {
    return strings.map(string => string[0].toUpperCase() + string.slice(1, -1) + string[string.length - 1].toUpperCase());
}

const strings = ["rodrigo", "cordeiro","tavares"];
const NovoArray = ArrayDeString(strings);

console.log(`As palavras com o inicio e final maisculo são: ${NovoArray}`)