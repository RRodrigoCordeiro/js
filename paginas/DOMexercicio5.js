// Crie uma página que exiba a tabuada de um número inserido pelo usuário, utilizando loops.

const tabuada = () => {
    let numeroInformado = Number(document.getElementById('numero').value);
    let resultado = document.getElementById('resultado');

    resultado.innerHTML = '';
     let tabuadaHTML = '<h2>Tabuada do' + numeroInformado + '</h2> <ul>'
    for (let i = 1; i <= 10;i++){
        tabuadaHTML += `<li>${numeroInformado} x ${i} = ${numeroInformado * i}</li>`;
    }
    tabuadaHTML += '</ul>';
    resultado.innerHTML = tabuadaHTML
}