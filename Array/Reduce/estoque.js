const vendas = [
  { produto: "Camiseta", qtd: 3, valor: 50 },
  { produto: "Calça", qtd: 2, valor: 100 },
  { produto: "Tênis", qtd: 1, valor: 200 },
  { produto: "Boné", qtd: 5, valor: 40 }
];

const faturamento = vendas.reduce((acc, p) => {
    return acc + (p.valor * p.qtd);
}, 0);

console.log(faturamento);