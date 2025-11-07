// 🏋️ Exercício — Aluno

// Crie um objeto chamado aluno com as propriedades nome e notas (um array de números).
// Adicione um método calcularMedia que calcule e exiba no console a média das notas do aluno.

const aluno = {

    nome: 'Pedro Henrique dos Santos',
    notas: [10, 7, 8, 9.8],

    calcularMedia() {

        let soma = 0;
        this.notas.forEach(n => soma += n);

        const media = soma / this.notas.length;
        return media;
    }
}

console.log(`Média do Aluno: ${aluno.calcularMedia()}`)
