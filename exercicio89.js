//  Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são divisíveis por 10.

const ArraydeNumbers = (numbers) => {
    return numbers.filter(number => number % 10 === 0);
}
const numbers = [3,10,20,1,50,40,5];
const NovoArray =  ArraydeNumbers(numbers);


console.log(`Os núemros do array que são divisíveis por 10 são: ${NovoArray}`)