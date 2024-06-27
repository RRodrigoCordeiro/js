//  Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string tenha as vogais triplicadas. Utilize a função replace() para triplicar as vogais.

const ArraydeStrings = (strings) => {
    return strings.map(string => string.replace(/[aeiouAEIOU]/g, (string) => string.repeat(3)));
}

const strings = ["rodrigo","cordeiro","tavares"];
const NovoArray = ArraydeStrings(strings);

console.log(`${NovoArray}`)