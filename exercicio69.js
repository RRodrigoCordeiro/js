//  Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são divisíveis por 8.

 const ArraydeNumbers = (numbers) => {
    return numbers.filter(number => number % 8 === 0);
 }

 const numbers = [8,1,2,16,24];
 const NovoArray = ArraydeNumbers(numbers)
 
 console.log(`Os números do array divisíveis por 8 são: ${NovoArray}`)