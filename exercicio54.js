// Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string tenha as consoantes removidas. Utilize a função replace() para remover as consoantes. 

const ArrayDeString = (strings) => {
    return strings.map(string => string.replace(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g, ''));
}

const strings = ["rodrigo","cordeiro","TAVARES"];
const NovoArray = ArrayDeString(strings);

console.log(`o array com as consoantes removidas fica da seguinte forma: ${NovoArray}`)




