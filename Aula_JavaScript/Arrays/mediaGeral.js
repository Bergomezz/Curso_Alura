const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function mediaSala(notaDaSala) {
    const somaDasSalas = notaDaSala.reduce((acum, atual) => atual + acum, 0)
    return somaDasSalas / notaDaSala.length;
};

console.log(`A Média da Sala: JavaScript ${mediaSala(salaJS)};`)
console.log(`A Média da Sala: Java ${mediaSala(salaJava)};`)
console.log(`A Média da Sala: Python ${mediaSala(salaPython)};`)