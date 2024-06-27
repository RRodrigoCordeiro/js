//  Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que terminam com a letra "a".

const PalavrasNovas = (ArrayDeString) => {
    return ArrayDeString.filter(string => string.endsWith("A") || string.endsWith("a"));

}

const ArrayDeString = ["CADEIA","ciência","RODRIGO","CORDEIRO"];
console.log(`Todas as palavras do array que terminam com a letra A ou a são: ${PalavrasNovas(ArrayDeString)}`);

  //  return nomes.filter(nome => nome.includes("A")); verifica se a letra a esta em qualquer parte da palavra