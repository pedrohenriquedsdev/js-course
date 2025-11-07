const pessoa = {
    nome: 'Pedro Henrique',
    idade:  18,
    solteiro: false,
    hobbies: ['Jogar Bola', 'VideoGame', 'Ler'],
    mostrarInfoPessoa: function (objeto) {
        console.log(`Nome: ${objeto.nome} - Tipo: ${typeof objeto.nome}`)
        console.log(`Idade: ${objeto.idade} - Tipo: ${typeof objeto.idade}`)
        console.log(`Solteiro: ${objeto.solteiro} - Tipo: ${typeof objeto.solteiro}`)
        console.log(`Hobbies: ${objeto.hobbies.join(', ')} - Tipo: ${typeof objeto.hobbies}`)
    }
}

pessoa.mostrarInfoPessoa(pessoa);