import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";




const cliente1 = new Cliente('Bernardo', 11122233309);
// const cliente2 = new Cliente('Alice', 88822233309);


const contaCorrenteBernardo = new ContaCorrente(cliente1, 1001);
const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);


// console.log(conta);
console.log(contaPoupanca);
console.log(contaCorrenteBernardo);

// const conta2 = new ContaCorrente(cliente2, 102);
// contaCorrenteBernardo.transferir(200, conta2);

// console.log(JSON.stringify(cliente1));
// console.log(JSON.stringify(cliente2));
// console.log(`${JSON.stringify(cliente1)}, \n${JSON.stringify(cliente2)}`);
//console.log(ContaCorrente.numeroDeContas);