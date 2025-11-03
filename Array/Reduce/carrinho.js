// Produtos para somar o valor total do carrinho
const carrinho = [
  { nome: "Camiseta", preco: 50 },
  { nome: "Calça", preco: 100 },
  { nome: "Tênis", preco: 200 },
  { nome: "Boné", preco: 40 }
];

const somaTotal = carrinho.reduce((acc, p) => {
    return acc + p.preco;
}, 0)

console.log(somaTotal);