// Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string esteja em letras minúsculas. Utilize a função toLowerCase() para converter as strings.

const nomes = ["RODRIGO", "CORDEIRO"];

function nomesMinusculos(nomes){
    return nomes.map(nome => nome.toLowerCase())
}
console.log(`Os nomes estão todos em minusculos, mas com o toLowerCase() os nomes ficaram em minusculos: ${nomesMinusculos(nomes)}`)