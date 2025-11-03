const pessoas = [
  { nome: "Ana", idade: 20 },
  { nome: "João", idade: 25 },
  { nome: "Maria", idade: 30 }
];

pessoas.forEach(p => {
    console.log(`${p.nome} - ${p.idade}`);
});