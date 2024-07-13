// Crie uma página que calcule o fatorial de um número inserido pelo usuário.

const CalcularNumero = () => {
    let numero1 = document.getElementById('num1').value;
    let resultado = document.getElementById('resultado');
    let fatorial = 1;
   

    resultado.innerHTML = ''
    numero1 = parseInt(numero1);


    if(numero1 < 0){
        resultado.innerHTML = `<p>Insira o número inteiro não negativo!</p>`;
        return;
        // alert("Insira o número inteiro e não negativo")
    }
    
     for(let i = 2; i <= numero1; i++ ){
        fatorial *= i;


     }

     resultado.innerHTML = `<h2>O fatorial de ${numero1} é ${fatorial}</h2>`


}