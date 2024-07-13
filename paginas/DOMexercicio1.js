// Crie uma página que calcule a média de quatro notas inseridas pelo usuário. Exiba se o aluno foi aprovado (média >= 7) ou reprovado (média < 7).


const calcularMedia = () => {
     let nota1 = parseFloat(document.getElementById('nota1').value);
     let nota2 = parseFloat(document.getElementById('nota2').value);
     let nota3 = parseFloat(document.getElementById('nota3').value);
     let nota4 = parseFloat(document.getElementById('nota4').value); 

     let media = (nota1 + nota2 + nota3 + nota4)  / 4;

     let resultado = document.getElementById('resultado')
     
     if(media >= 7 ){
        resultado.innerHTML = `<p>A média do aluno é ${media.toFixed(2)} ele foi aprovado</p>`
     } else if(media < 7){
        resultado.innerHTML = `<p>A média do aluno é ${media.toFixed(2)} ele foi reprovado.</p>`
     } else {
        resultado.innerHTML = `<p> Preenche todos os campos para saber a média do aluno e se ele foi aprovado ou reprovado`
     }


}



