// Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que começam com a letra "A".

const nomes = ["Ana","amaral","Marcos"]
function stringA (nomes){
    return nomes.filter(nome => nome.startsWith("a") || nome.startsWith("A"));
    //  return nomes.filter(nome => nome.includes("A")); verifica se a letra a esta em qualquer parte da palavra

}
console.log(`dfghjkl ${stringA(nomes)}`)