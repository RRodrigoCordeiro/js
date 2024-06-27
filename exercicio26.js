//  Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string esteja invertida. Utilize a função reverse() para inverter as strings.


const ArrayDePalavra = (ArrayDeString) => {
    return ArrayDeString.reverse()

}

const Palavras = ["Rodrigo","Cordeiro","Tavares"];
const ArrayInvetida = ArrayDePalavra(Palavras);
console.log(`A ordem correta do array é de: "Rodrigo","Cordeiro","Tavares". No entanto, a ordem desse array invertida é de: ${ArrayInvetida}`)
