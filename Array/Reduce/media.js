const people = [
  { name: "Alice", age: 28 },
  { name: "Bob", age: 35 },
  { name: "Charlie", age: 22 }
];
// Goal: Use reduce() to find the **average age** of all people

const average = people.reduce((acc, p) => {
    return acc + p.age;
}, 0);

const media = average / people.length;

console.log(media.toFixed(1));

