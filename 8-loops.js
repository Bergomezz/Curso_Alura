console.log('\n Trabalhando com Loops!');


const listaDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 15;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = 'Salvador';

console.log('\n Destinos Possives');
console.log(listaDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true; 

let contador = 0;
while(contador<3){
    if(listaDestino[contador] == destino){
        console.log('Destino existe.');
    }else{
        console.log('Destino não existe.');
    }
    contador +=1;
}