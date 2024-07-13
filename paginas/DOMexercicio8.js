// Crie uma página que simule o lançamento de dois dados e exiba o resultado da soma. Adicione um botão para lançar novamente.

const FazerLancamento = () => {
    let resultado = document.getElementById('resultado');


    let dado1 = Math.floor(Math.random() * 6) + 1; // Número aleatório entre 1 e 6
    let dado2 = Math.floor(Math.random() * 6) + 1; 

    let soma = dado1 + dado2

    resultado.innerHTML = `
                        <h2>O resultado da soma dos dados foram de: </h2>
                        <p>${dado1} + ${dado2} = ${soma}</p>
    `

    

}