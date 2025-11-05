// Avançado (Desafio):
// Crie um objeto library que contenha vários livros (cada livro é um objeto com title, author, available).

// Adicione um novo livro.

// Altere a disponibilidade de um livro específico.

// Remova um livro usando a chave do objeto.

// Acesse os títulos de todos os livros usando uma combinação de notação de ponto e colchetes.

const library = {

    book1: {
        title: 'Hábitos Atômicos',
        author: 'James Clear',
        available: true
    },

    book2: {
        title: 'Aprendendo a Aprender',
        author: 'Bárbara Oakley',
        available: true
    },

    book3: {
        title: 'Por que fazemos o que fazemos?',
        author: 'Mário Sérgio Cortella',
        available: true
    }

}

library.book4 = {
    title: 'Entendendo Algoritmos',
    author: 'Bhargava',
    available: true
}

library.book1.available = false;
delete library.book2;

console.log(library.book1.title, '-', library.book3.title, '-', library.book4.title);
