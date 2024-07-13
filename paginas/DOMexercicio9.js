// Crie uma página que receba um texto e conte o número de vogais e consoantes.


// const SomadeVogaisEConsoantes = () => {
//     let input = document.getElementById('input').value;
//     let resultado = document.getElementById('resultado');
//     let vogal = 0;
//     let consoante = 0;

//     resultado.innerHTML = '';

//     if(input.length === 0){
//         resultado.innerHTML = 'Por favor, insira um texto.';
//         return;
//     }

//     input = input.toLowerCase();

//     for(let i = 0; i < input.length; i++){
//         let letra = input[i];
//         if(/[aeiou]/.includes(letra)) {
//             vogal++;
//         } else if(/[bcdfghjklmnpqrstvwxyz]/.includes(letra)) {
//             consoante++;
//         }
//     }

//     resultado.innerHTML = `
//         <h2>Quantidade de vogais: ${vogal}</h2>
//         <h2>Quantidade de consoantes: ${consoante}</h2>
//     `;
// }