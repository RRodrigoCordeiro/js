// Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string tenha as vogais duplicadas. Utilize a função replace() para duplicar as vogais.

const ArraydeString = (strings) =>{
    return strings.map(string => string.replace( /[aeiou]/g, string => string + string));
}
const strings = ["rodrigo","cordeiro","tavares"];
const NovoArray = ArraydeString(strings);

console.log(NovoArray)
