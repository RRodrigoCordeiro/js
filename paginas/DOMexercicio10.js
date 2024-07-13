// Crie uma página que converta um valor de decimal para binário.


const CoverterDecimalParaBinario = () => {
    let numero = document.getElementById('numero').value;
    let resultado = document.getElementById('resultado');

    resultado.innerHTML = '';

    if(numero.length === 0) {
        resultado.innerHTML = 'Escreva um número para fazer a conversão do número decimal para o número binário';

    }  
   let numeroDecimal = parseInt(numero);

   if(isNaN(numeroDecimal)) {
        resultado.innerHTML = 'dfghjklç';
        return;
   }
   let numeroBinario = numeroDecimal.toString(2);

   resultado.innerHTML = `
            <h2> O número que você botou foi:${numero} \n o número convertido para binário foi: ${numeroBinario}</h2>
   
   `

    

  
}