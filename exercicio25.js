// Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são múltiplos de 5.

 const ArrayDeNumbers = (numbers) => {
    return numbers.filter(num => num % 5 === 0);
 }

 const numbers = [5,10,8,7,20,25];
 const MultiploDeCinco = ArrayDeNumbers(numbers);

 console.log(`Os números do array são: 5,10,8,7,20,25 e os números que são múltiplo de 5 são: ${MultiploDeCinco}`)

