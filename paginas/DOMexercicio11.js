// Crie uma página que calcule a sequência de Fibonacci até um número N inserido pelo usuário.


const CalculandoSequenciadeFibonacci = () => {
    let numero = document.getElementById('numero').value;
    let resultado = document.getElementById('resultado');

    resultado.innerHTML = '';    

    if(numero.length ===0 ){
        resultado.innerHTML = "Digite o número";
    }
    else if(numero <= 0){
        resultado.innerHTML = 'Digite o número maior que 0';
    } else {
    let fibonacci = [0,1];

    for(let i = 2; i < numero; i++){
        fibonacci[i] = fibonacci[i-1] + fibonacci [i-2];
      
    }
    resultado.innerHTML = `
                        <p>${fibonacci}</p>
    
    `

    }
    }
