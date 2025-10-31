const words = ["learning", "javascript", "is", "fun"];
// Goal: Use reduce() to create a sentence with all words in uppercase
// Expected result: "LEARNING JAVASCRIPT IS FUN"

const phrase = words.reduce((acum, w) => {
    return acum.toUpperCase() + ' ' + w.toUpperCase();
},'')

console.log(phrase);
