const players = [
    { name: "Allicia", score: 45 },
    { name: "Bob", score: 82 },
    { name: "Charlie", score: 37 },
    { name: "Diana", score: 60 },
    { name: "Eve", score: 50 }
];

const topPlayers = players.filter(p => p.score >= 50);

console.log(topPlayers);