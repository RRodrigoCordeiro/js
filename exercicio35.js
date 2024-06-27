// Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string esteja em letras maiúsculas e invertida.

const ArrayDeString = (strings) =>{
    return strings.map(string => string.toUpperCase().split('').reverse().join(''));

}

const strings = ["rodrigo","cordeiro","tavares"];
const NovoArray = ArrayDeString(strings);

console.log(`As palavras maiusculas e invertidas são: ${ArrayDeString(strings)}`)