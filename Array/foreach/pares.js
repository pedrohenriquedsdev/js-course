//Percorra um array de números e exiba apenas os números pares.

const numeros = [2, 5, 7, 10, 14, 19];

numeros.forEach(n => {
    if (n % 2 === 0){
        console.log(n);
    }
});