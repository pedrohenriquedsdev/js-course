//🔥 Desafio: Dado um array de produtos com preço e desconto, 
//crie um novo array com o preço final de cada produto após o desconto.
// Produtos com preço e desconto para o desafio
const produtos = [
  { nome: "Camiseta", preco: 100, desconto: 0.1 },
  { nome: "Calça Jeans", preco: 200, desconto: 0.2 },
  { nome: "Tênis", preco: 300, desconto: 0.15 },
  { nome: "Boné", preco: 50, desconto: 0.05 }
];

const produtosComDesconto = produtos.map(p => p.preco * (1 - p.desconto));

console.log(produtosComDesconto);
console.log(produtos);