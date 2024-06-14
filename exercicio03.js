//  Crie um script que declare uma variável const base e atribua a ela um valor numérico. Declare uma função que calcule a área de um triângulo usando a base e uma altura fornecida como parâmetro e imprima o resultado.


// sem arrow function
// const base = 8;

// function CalculandoAreaTriangulo (calculo){
//     let altura = 8
//     let area = (base * altura) / 2;
//     return area;
// }
// console.log(`gfds ${CalculandoAreaTriangulo(base)}`)

// sem arrow function

const base = 8;
function CalculandoAreaTriangulo (altura){
    let area = (base * altura) / 2;
    return area;
}
console.log(`Essa função é sem arrow function, a área do triangulo é de: ${CalculandoAreaTriangulo(10)}`)

//  com arrow function

const Base = 18
const calculoDaAreaTriangulo = (Altura) => {
    let Area = (Base * Altura) / 2;
    return `Essa função é com arrow function, a área do trinagulo é de: ${Area}`;
}

console.log(calculoDaAreaTriangulo(2))







