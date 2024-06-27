//  Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são maiores que 10.

const ArrayDeNumbers = (numbers) => {
    return numbers.filter(Number => Number > 10);

}

const numbers = [10,5,8,4,20,30,40,50,60];
console.log(`os numeros do array maiores que 10 são: ${ArrayDeNumbers(numbers)}`)