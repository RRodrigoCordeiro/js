// Crie uma página que verifique se um número é primo. O usuário deve inserir um número e a página deve exibir se ele é primo ou não.

function verificarPrimo() {
    // Captura o número digitado pelo usuário
    let numero = parseInt(document.getElementById("numero").value);
    
    // Verifica se o número é um inteiro positivo maior que 1
    if (numero <= 1) {

        document.getElementById("resultado").textContent = "Por favor, insira um número inteiro positivo maior que 1.";
        return;
    }
    
    // Verifica se o número é primo
    let ehPrimo = true;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            ehPrimo = false;
            break;
        }
    }
    // Exibe o resultado
    if (ehPrimo) {
        document.getElementById("resultado").textContent = `${numero} é um número primo.`;
    } else {
        document.getElementById("resultado").textContent = `${numero} não é um número primo.`;
    }
}
