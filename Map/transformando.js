const words = ["apple", "banana", "cherry"];

const objectWords = words.map(w => ({
    word: w,
    reversed: w.split('').reverse().join('')
}));

console.log(objectWords);