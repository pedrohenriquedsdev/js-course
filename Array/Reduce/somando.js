const numeros = [10, 20, 30, 40, 50];

const soma = numeros.reduce((acc, n) => {
    return acc + n;
}, 0)

console.log(soma);
