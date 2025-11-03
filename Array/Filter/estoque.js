const produtos = [
  { nome: "Camiseta", preco: 59.9, emEstoque: true },
  { nome: "Calça Jeans", preco: 129.9, emEstoque: true },
  { nome: "Boné", preco: 39.9, emEstoque: false },
  { nome: "Meias", preco: 19.9, emEstoque: true }
];

const produtosFiltrados = produtos.filter(p => p.emEstoque && p.preco < 100);

console.log(produtosFiltrados);
// [
//   { nome: "Camiseta", preco: 59.9, emEstoque: true },
//   { nome: "Meias", preco: 19.9, emEstoque: true }
// ]
