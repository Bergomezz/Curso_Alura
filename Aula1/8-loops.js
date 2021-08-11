console.log('\n Trabalhando com Loops!');


let listaDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = true;
const destino = 'Fortalezar';

console.log('\n Destinos Possives');
console.log(listaDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;

while(contador<3){
    if(listaDestinos[contador]==destino){
        destinoExiste=true;
        break;
    }
    contador += 1;
}

console.log('\n Destino existe :', destinoExiste);

if( podeComprar && destinoExiste){
    console.log('\n Boa Viagem!');
}else{
    console.log('\n Error!!!');
};


for(let cont = 0; cont <3;cont++){
    if(listaDestinos[contador]==destino){
        destinoExiste=true;
        break;
    }
}