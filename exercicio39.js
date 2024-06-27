// Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string tenha a última letra em maiúscula. Utilize a função toUpperCase() para converter a última letra.

const ArrayDeString = (strings) => {
    
    return strings.map(string =>  string.slice(0,-1) + string.slice(-1).toUpperCase() 

);

}
const strings = ["rodrigo","cordeiro","tavares"];
const NovoArray = ArrayDeString(strings);
console.log(ArrayDeString(NovoArray))

