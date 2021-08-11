// Tentando Pensar em algum exercicios pra fazer.

const readline = require('readline-sync');
const numeroPedido = readline.question('Número do Pedido:');
const enderecoDeEntrega = readline.question('Seu Endereço:');
const horaDoPedido = readline.question('O Pedido foi Feito as:');

let rota = {
    numeroPedido, 
    enderecoDeEntrega,
    horaDoPedido
};

const numeroPedido1 = readline.question('Número do Pedido:');
const enderecoDeEntrega1 = readline.question('Seu Endereço:');
const horaDoPedido1 = readline.question('O Pedido foi Feito as:');

let rota1 = {
    numeroPedido1, 
    enderecoDeEntrega1,
    horaDoPedido1
};

if(enderecoDeEntrega==enderecoDeEntrega1){
    let bloco = (rota + rota1);
    console.log(bloco);
}else{
    console.log(rota);
    console.log(rota1);
};