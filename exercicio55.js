//  Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que começam com a letra "C".

const ArrayDeString = (strings) => {
return strings.filter(string => string.startsWith("C") || string.startsWith("c"));
}

const strings = ["Rodrigo","Cordeiro","Casa","Tavares","Cenoura","cadeira"];
const NovoArray = ArrayDeString(strings);

console.log(`No array as palavras que começam com a letra C são: ${NovoArray}`)