// Tentando Pensar em algum exercicios pra fazer.

const readline = require('readline-sync');
const numeroPedido = readline.question('Número do Pedido:');
const enderecoDeEntrega = readline.question('Seu Endereço:');
const horaDoPedido = readline.question('O Pedido foi Feito as:');
const horaFormatada = horaDoPedido.replace(/(\d{2})?(\d{2})/, '$1:$2')

class Cliente {
    constructor(nome, endereco, horaDoPedido, numeroPedido){
        this.nome = nome;
        this.endereco = enderecoDeEntrega;
        this.horaDoPedido = horaDoPedido;
        this.numeroPedido = numeroPedido;
    };

};

class Rota extends Cliente{
    constructor(nome, endereco);

};

if(cliente1.enderecoDeEntrega == cliente2.enderecoDeEntrega){
    console.log(`Entregador 1: ${(Rota)}`);
}else{
    console.log(`Entregador 1: ${cliente1} e Entregador 2: ${cliente2}`);
};

// const numeroPedido1 = readline.question('Número do Pedido:');
// const enderecoDeEntrega1 = readline.question('Seu Endereço:');
// const horaDoPedido1 = readline.question('O Pedido foi Feito as:');

// let rota1 = {
//     numeroPedido1, 
//     enderecoDeEntrega1,
//     horaDoPedido1
// };

// let rotaOrganizada = [];
// rotaOrganizada.push({
//     numeroPedido,
//     enderecoDeEntrega,
//     horaFormatada
// },{
//     numeroPedido1,
//     enderecoDeEntrega1,
//     horaDoPedido1
// });
// JSON.stringify(rotaOrganizada[0,1]);

// if(enderecoDeEntrega==enderecoDeEntrega1){
//     console.log(`Entrgador 1: ${rotaOrganizada}`);
// }else{
//     console.log('Entregador 1:');
//     console.log(rota);
//     console.log('Entregador 2:');
//     console.log(rota1);
// };