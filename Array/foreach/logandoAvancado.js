const pessoas = [
    { nome: "Ana", idade: 17 },
    { nome: "Bruno", idade: 22 },
    { nome: "Clara", idade: 19 },
    { nome: "Diego", idade: 15 },
    { nome: "Elisa", idade: 30 }
];

pessoas.forEach(pessoa => {
    if (pessoa.idade > 18) {
        console.log(`Usuário ${pessoa.nome.toUpperCase()}, com ${pessoa.idade} anos, logado com sucesso!`);
    }
})