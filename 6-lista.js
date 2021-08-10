console.log(`Trabalhando com listas`);

// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

listaDestinos.push(`Curitiba`); //Adiciona um item na lista.
console.log('Destinos Possives');
// console.log(salvador, saoPaulo, rioDeJaneiro)
console.log(listaDestinos);

listaDestinos.splice(1,1);
console.log(listaDestinos);
console.log(listaDestinos[1]);