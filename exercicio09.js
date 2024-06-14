//  Crie um script que declare uma função que receba um array de números como parâmetro e retorne a média dos números do array.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function calculandoMedia (){
    let soma = 0
    for(let i = 0; i < numbers.length; i++){
        soma += numbers[i];
    }
    const media = soma / numbers.length;
    return media;
}
console.log(`A media do array desses números foi de: ${calculandoMedia(numbers)}`)




