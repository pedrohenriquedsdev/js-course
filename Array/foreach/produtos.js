const produtos = [
  { nome: "Camiseta", preco: 59.90 },
  { nome: "Calça Jeans", preco: 129.90 },
  { nome: "Tênis", preco: 249.90 },
  { nome: "Boné", preco: 39.90 }
];


produtos.forEach(p => {
    console.log(`Produto: ${p.nome} - Preço: R$${p.preco.toFixed(2)}`);
})