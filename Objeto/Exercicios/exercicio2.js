// 2 - Adicione ao objeto pessoa uma nova propriedade chamada endereco. Esta propriedade deve ser um objeto representando o endereço da pessoa, com as seguintes subpropriedades:

// rua (string): nome da rua.
// cidade (string): nome da cidade.
// estado (string): nome do estado.
// Preencha as subpropriedades do objeto endereco com valores fictícios.

// Modifique a função mostrarInfoPessoa para incluir as informações do endereço da pessoa ao ser chamada.

// No final do arquivo infoPessoa.js, chame a função mostrarInfoPessoa para verificar se as informações atualizadas, incluindo o endereço, são exibidas corretamente no console.

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
        console.log(`Endereço = Rua: ${objeto.endereco.rua} - Cidade: ${objeto.endereco.cidade} - Estado: ${objeto.endereco.estado}`)
    }
}

pessoa.endereco = {
    rua: 'Av Carlos Lacerda',
    cidade: 'Lages',
    estado: 'Santa Catarina'
}

pessoa.mostrarInfoPessoa(pessoa);