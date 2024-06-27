// Crie um script que declare um array de objetos, onde cada objeto representa um aluno e possui as propriedades nome, idade e notas (um array de números). Utilize a função map() para criar um novo array contendo apenas os nomes dos alunos. Imprima o novo array.

let alunos = [
    {
        nome: "Rodrigo",
        idade: 20,
        notas: [10,9,8]
    },
    {
        nome: "Cordeiro",
        idade: 20,
        notas: [10,9,8]

    },
    {
        nome: "Tavares",
        idade: 20,
        notas: [10,9,8]

    }

];

const nomesDosAlunos = alunos.map(aluno => aluno.nome);

console.log("Os nomes dos alunos são: " + nomesDosAlunos);
