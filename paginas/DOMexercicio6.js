// Crie uma página que receba uma lista de nomes e exiba o nome mais longo e o mais curto.

const  ListadeNomes = () => {
    let nomeInformado1 = document.getElementById('nome1').value;
    let nomeInformado2 = document.getElementById('nome2').value;
    let resultado = document.getElementById('resultado');

    resultado.innerHTML = '';

    const nomeInformados = [nomeInformado1, nomeInformado2];

    let nomeMaisLongo = '';
    let nomeMaisCurto = nomeInformados[0] || '';

    for(let i = 0; i < nomeInformados.length; i++){
        let nomeAtual = nomeInformados[i];
        
        if(nomeAtual.length > nomeMaisLongo.length) {
            nomeMaisLongo = nomeAtual;
        }else {
            nomeMaisCurto = nomeAtual
        }

    }
     let listaHTML = `<h2>Nomes informados</h2> <ul>
                    <ul>
                        <li>${nomeInformado1}</li>
                        <li>${nomeInformado2}</li>
                    </ul>

                    <h2> O nome mais longo é ${nomeMaisLongo}</h2>
                    <h2> O nome mais curto é ${nomeMaisCurto}</h2>

                    `
    resultado.innerHTML = listaHTML;

}


