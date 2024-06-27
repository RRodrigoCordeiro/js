// Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja decrementado em 1.

const decrementandoArray = (numbers) => {
    return numbers.map(num => num - 1 );
}

const numbersParaSerDecrementado = [5,6,7];
const decrementandoNumeros = decrementandoArray(numbersParaSerDecrementado);
console.log(`Os núemros são: 5,6,7 e os mesmos decrementados com - 1 são: ${decrementandoNumeros}`);


  


