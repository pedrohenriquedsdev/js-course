// Intermediário/Avançado:
// Dado um objeto book com title, author e year, adicione uma nova propriedade publisher, 
// altere o year e depois remova o author. Use tanto ponto quanto colchetes onde fizer sentido.

const book = {
    title: 'Hábitos Atômicos',
    author: 'James Clear',
    year: 2018
}

book.publisher = 'Alta Life';
book.year = 2020;
delete book.author;

console.log(book);