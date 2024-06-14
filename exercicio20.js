// Crie um script que declare um array de objetos, onde cada objeto representa um aluno e possui as propriedades nome, idade e notas (um array de números). Utilize um loop for para imprimir o nome de cada aluno.

let alunos = [
    {
        nome: "Rodrigo",
        idade: 21,
        notas: [10,8,7]
    },
    {
        nome: "Cordeiro",
        idade: 20,
        notas: [8,7,6]
    },
    {
        nome: "Tavares",
        idade: 19,
        notas: [6,5,4]

    }
];

for (let i = 0; i < alunos.length; i++){
    console.log(`Nome do aluno: ${alunos[i].nome}`);
    console.log(`Idade do aluno: ${alunos[i].idade}`);
    console.log(`Notas do aluno: ${alunos[i].notas}`);
}