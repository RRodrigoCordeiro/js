// Crie um script que declare um array de objetos, onde cada objeto representa um aluno e possui as propriedades nome, idade e notas (um array de números). Utilize a função filter() para criar um novo array contendo apenas os alunos com idade maior ou igual a 18 anos. Imprima o novo array.

let aluno = [
    {
        nome:"Rodrigo",
        idade: 15,
        notas: [10,9,8]
    },
    {
        nome:"Cordeiro",
        idade: 18,
        notas: [7,4,5]

    },
    {
        nome:"Tavares",
        idade: 19,
        notas: [7,7,8]

    }
];


const alunosMaiores = aluno.filter(aluno => aluno.idade >= 18);
alunosMaiores.forEach(aluno => {
    console.log(`Nome:${aluno.nome}, Idade: ${aluno.idade},Notas: ${aluno.notas}`)
})




