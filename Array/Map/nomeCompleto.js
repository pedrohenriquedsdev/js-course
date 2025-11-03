// Pessoas com nome e sobrenome para criar nome completo
const pessoas = [
  { nome: "Ana", sobrenome: "Silva" },
  { nome: "João", sobrenome: "Souza" },
  { nome: "Maria", sobrenome: "Oliveira" },
  { nome: "Pedro", sobrenome: "Almeida" }
];

const nomeCompleto = pessoas.map(p => p.nome + ' ' + p.sobrenome);

console.log(nomeCompleto);