// Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string tenha a primeira letra em maiúscula. Utilize a função toUpperCase() para converter a primeira letra.

const RecebendoArrayDeString = (ArrayString) => {
     return ArrayString.map(NovaString => NovaString.charAt(0).toUpperCase() + NovaString.slice(1));
    //  return ArrayString.map(NovaString => NovaString.charAt(0).toUpperCase() + NovaString.slice(1));
    
}
const ArrayDeString = ["rodrigo","cordeiro"]
console.log(RecebendoArrayDeString(ArrayDeString))