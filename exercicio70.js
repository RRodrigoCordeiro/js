//  Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string tenha a primeira letra em maiúscula e a última letra em minúscula. Utilize a função toUpperCase() e toLowerCase() para converter as letras.

const ArraydeString = (string) => {
    return string.map(string => string.charAt(0).toUpperCase() + string.slice(1).toLowerCase())
   
   
    
}

const strings = ["rodrigO","cordeiO"];
const NovoArray = ArraydeString(strings);

console.log(`As palavras com a primeira letra maiúscula e a última letra minúscula são: ${NovoArray}`)