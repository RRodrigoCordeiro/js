// Crie uma página que calcule a soma dos números de 1 a N, onde N é um valor inserido pelo usuário.


const CalcularSoma = () => {
    let numero = Number(document.getElementById('numero').value);
    let resultado = document.getElementById('resultado');
    let soma = 0;

    for(let i = 1; i <= numero; i++){
        soma += i;
    }
    resultado.textContent = `A soma dos números de 1 a ${numero} é ${soma}`;
}

























//    document.getElementById('somaForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     calcularSoma();
// });

// function calcularSoma() {
//     var numeroN = parseInt(document.getElementById('numeroN').value);
//     var soma = 0;
//     for (var i = 1; i <= numeroN; i++) {
//         soma += i;
//     }
//     document.getElementById('resultado').innerHTML = 'A soma dos números de 1 a ' + numeroN + ' é: ' + soma;
// }