//  Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja convertido para uma string com duas casas decimais. Utilize a função toFixed() para formatar os números.

const RecebeArrayDeNumero = (ArrayNumero) => {
    return ArrayNumero.map(array => array.toFixed(2));

}
const ArrayDeNumbers = [7,4];
console.log(RecebeArrayDeNumero(ArrayDeNumbers))
