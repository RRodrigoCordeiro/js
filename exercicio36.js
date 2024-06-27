//  Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que contêm a letra "e".

const ArrayDeString = (strings) => {
    return strings.filter(string => string.includes("e") || string.includes("E"));

}
const strings = ["rodrigo","cleide","andre","tavares","cordeiro","lindomar","CADEIRA","ELEFANTE"];
const NovoArray = ArrayDeString(strings);
console.log(`As palavras que contêm a letra e nesse array são: ${ArrayDeString(NovoArray)}`);
