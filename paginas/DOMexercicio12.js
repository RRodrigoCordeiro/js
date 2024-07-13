// Crie uma página que verifique se uma palavra é um palíndromo.


const  VerificarPalindromo = () => {
    let verificar = document.getElementById('verificar').value;
    let resultado = document.getElementById('resultado');

    resultado.innerHTML = '';


    if(verificar === ''){
        resultado.innerHTML = 'adicione alguma palavra';
        return;
    }
    let ehPalindromo = true;
    for(let i = 0; i < verificar.length / 2; i++){
        if (verificar[i] !== verificar[verificar.length - 1 - i]) {
            ehPalindromo = false;
            break;
        } 
    }

     if (ehPalindromo) {
        resultado.innerHTML = `<p>${verificar} é um palíndromo.</p>`;
    } else {
        resultado.innerHTML = `<p>${verificar} não é um palíndromo.</p>`;
    }

}
