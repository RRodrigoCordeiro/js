//  Crie um script que declare uma variável var largura e atribua a ela um valor numérico. Declare uma função que calcule a largura ao cubo e imprima o resultado.



// sem arrow function
var largura = 4 ;

function CalcularALarguraAoCubo(largura){
    let calculo = largura * largura * largura;
    return calculo;
}
console.log(`A largura ao cubo será de: ${CalcularALarguraAoCubo(largura)}`);


// com arrow function

var largura = 8;

const CalculandoCubo = (ValorLargura) => {
    let calculo = largura * largura * largura;
    return `Essa função foi com arrow function, e o valor do cubo foi de: ${calculo}`;
}
console.log(CalculandoCubo(largura));
