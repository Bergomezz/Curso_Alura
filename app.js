// escrever códigos para passar aos outros novos arquivos


const listaDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 15;
const estaAcompanhada = true;

console.log('Destinos Possives');
console.log(listaDestinos);

if (idadeComprador >= 18) {
    console.log('Comprador maior de idade');
    listaDestinos.splice(1, 1);
} else if (estaAcompanhada) {
    console.log('Comprador está acompanhado');
    listaDestinos.splice(1, 1);
} else {
    console.log('Comprador não é maior de idade!');
};


console.log(listaDestinos);