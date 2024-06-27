// Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que têm exatamente 4 caracteres.

const ArrayDeString = (strings) => {
    return strings.filter(string => string.length === 4 );

}

const strings = ["rodrigo","kaka","cordeiro", "casa"]
const NovoArray = ArrayDeString(strings);
console.log(`As strings que tem exatamente 4 caracteres são: ${ ArrayDeString(NovoArray)}`);