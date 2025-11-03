const notas = [7, 8, 9, 10, 6];

const medias = notas.reduce((acc, n) => {
    return acc + n / notas.length;
}, 0)

console.log(medias);
