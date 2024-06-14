// Crie um script que declare uma variável let altura e atribua a ela um valor numérico. Em seguida, declare uma função que calcule a altura ao quadrado e imprima o resultado.

// sem arrow function
let altura = 8;

function ValorAlturaDoQuadrado(altura) {
    let alturaDoQuadrado = altura * altura;
    return alturaDoQuadrado;
}
console.log(`Essa função calcula a altura do quadrado, a altura do quadrado é de: ${ValorAlturaDoQuadrado(altura)}`);



//  com arrow function 

let Altura = 7;

const SaberAlturaDoQuadrado = (ValorAltura) => {
    let SaberAlturaDoQuadrado = Altura * Altura;
    return `A altura do quadrado é de: ${SaberAlturaDoQuadrado}`;
}
console.log(SaberAlturaDoQuadrado(Altura));
