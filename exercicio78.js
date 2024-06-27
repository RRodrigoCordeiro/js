// Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string tenha a primeira letra em minúscula e a última letra em maiúscula. Utilize a função toLowerCase() e toUpperCase() para converter as letras.

const ArraydeString = (strings) => {
    return strings.map(string => string.charAt(0).toLowerCase() + string.slice(1, -1) + string.slice(-1).toUpperCase());
}

const strings = ["Rodrigo","Cordeiro","Tavares"];
const NovoArray = ArraydeString(strings);

console.log(`As palavras do array com a primeira letra em minúsculo e a última letra em maiúscula são: ${NovoArray}`);
