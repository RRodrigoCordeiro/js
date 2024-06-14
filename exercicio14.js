//  Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string esteja em letras maiúsculas. Utilize a função toUpperCase() para converter as strings.

const nomes = ["rodrigo","cordeiro"];

function ModificarNome (nomes) {
    return nomes.map(nome => nome.toUpperCase());

}
console.log(`Essas palavras estão em menusculos, mas com o toUpperCase() ficaram todas em maicusculo: ${ModificarNome(nomes)}`)

