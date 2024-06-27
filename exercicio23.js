// Crie um script que declare um array de objetos, onde cada objeto representa um aluno e possui as propriedades nome, idade e notas (um array de números). Utilize a função reduce() para calcular a média das idades dos alunos.

let alunos = [
    {
        nome: "Rodrigo",
        idade: 10,
        notas:[1,2,3]
    },
    {
        nome: "Cordeiro",
        idade: 15,
        notas: [5,4,8]
    },
    {
        nome:"Tavares",
        idade: 20,
        notas: [8,7,6]
    }
];

const CalcularMedia = alunos.reduce((total,aluno) => total + aluno.idade,0)
const mediaIdade = CalcularMedia / alunos.length;
console.log(mediaIdade)
