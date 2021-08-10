// escrever códigos para passar aos outros novos arquivos


const listaDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 15;
console.log('Destinos Possives');
console.log(listaDestinos);

if(idadeComprador >= 18){
    console.log('Comprador maior de idade');
    listaDestinos.splice(1,1);
}else{
    console.log('Comprador não é maior de idade!');
};



console.log(listaDestinos);