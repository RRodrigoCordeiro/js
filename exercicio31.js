//  Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que têm mais de 5 caracteres.

const ArrayDeString = (string) => {
    return string.filter(strings => strings.length > 5)

}
const string = ["Rodrigo","sol","Cordeiro","lua","Tavares","mar"];
const MaiorqueCinco = ArrayDeString(string);
console.log(`Dentro desse array de string, as palavras que tem mais de 5 caracteres são: ${ArrayDeString(MaiorqueCinco)}`);
// console.log(`Dentro desse array de string, as palavras que tem mais de 5 caracteres são: ${MaiorqueCinco}`);