let valor;
let dias;
let resultado = document.getElementById('resultado');
let valor_juros = '';

resultado.innerHTML = '';

const Calculando = () => {
    // Obter os valores atuais de valor e dias
    valor = parseFloat(document.getElementById('valor').value);
    dias = parseInt(document.getElementById('dias').value);

    // Limpar o conteúdo anterior de resultado
    resultado.innerHTML = '';

    if (dias > 0) {
        if (dias > 15) {
            valor_juros = 10;
        } else {
            valor_juros = 5;
        }

        let total_juros = (valor / 100) * valor_juros;
        let valor_total = valor + total_juros;

        console.log("\nValor original da dívida: R$ " + valor);
        console.log("Dias de atraso: " + dias);
        console.log("Taxa de Juros: " + valor_juros + "%");
        console.log("Valor total com juros: R$ " + valor_total.toFixed(2));

        // Exemplo de exibição no resultado HTML
        resultado.innerHTML = `
            <p>Valor original da dívida: R$ ${valor.toFixed(2)}</p>
            <p>Dias de atraso: ${dias}</p>
            <p>Taxa de Juros: ${valor_juros}%</p>
            <p>Valor total com juros: R$ ${valor_total.toFixed(2)}</p>
        `;
    } else {
        console.log("Você está em dia!");
    }

    if (valor <= 0) {
        console.log("O valor da dívida deve ser maior que zero!");
    }
}
