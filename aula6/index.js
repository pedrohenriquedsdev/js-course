const primeiroNumero = 1;
const segundoNumero = 2;

const resultado = primeiroNumero + segundoNumero; //const impede a reatribuição da variável mas não a modificaqção do valor
console.log(resultado);



// 🔹 Com const, você não pode trocar a variável, mas pode mexer no que ela guarda.

// Se for um valor simples (número, string, boolean), não há o que mudar — ele é imutável.

// Mas se for algo complexo (array, objeto, função), você pode alterar o conteúdo interno, só não pode reatribuir a variável para outro valor.