// Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string tenha todas as letras em maiúscula e invertida.

const ArraydeString = (strings) => {
    return  strings.map(string => string.toUpperCase().split('').reverse().join(''));
}

const strings = ["rodrigo","cordeiro","tavares"];
const NovoArray = (ArraydeString(strings));

console.log(`As palavras do array maiusculas e invertida são: ${NovoArray}`)

