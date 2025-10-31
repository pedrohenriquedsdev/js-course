const books = [
  { title: "Harry Potter", pages: 500 },
  { title: "Lord of the Rings", pages: 1000 },
  { title: "The Hobbit", pages: 300 }
];

const newObject = books.reduce((acc, book) => {
    acc.totalPages += book.pages;
    acc.bookTitles.push(book.title);
    return acc;

}, {totalPages: 0, bookTitles: []});

console.log(newObject);