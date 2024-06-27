//  Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string tenha todas as letras em maiúscula e invertida.

const ArraydeStrings = (strings) => {
    return strings.map(string => string.toUpperCase().split('').reverse().join(''));

}

const strings = ["rodrigo","cordeiro"];
const NovoArray = ArraydeStrings(strings);

console.log(`As palavras maiusculas e invertidas são: ${NovoArray}`);