// Crie uma página que gere um número aleatório entre 1 e 100 e permita que o usuário tente adivinhar. Informe se a tentativa é maior, menor ou igual ao número gerado.

const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

document.getElementById('numero-gerado').textContent = 'Número gerado (para teste): ' + numeroAleatorio;

const adivinhar = () => {
   let palpite = Number(document.getElementById('palpite').value);
   let resultado = (document.getElementById('resultado'));

   if(palpite > numeroAleatorio ){
      resultado.textContent = `O número é maior!`;
   } else if(palpite < numeroAleatorio){
      resultado.textContent = `O número é menor!`;
   }else{
      resultado.textContent = `O número foi correto!`;
   }



}