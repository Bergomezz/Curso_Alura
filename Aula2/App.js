import { ContaCorrente } from "./Conta/ContaCorrente.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";




const cliente1 = new Cliente('Bernardo', 11122233309);
// const cliente2 = new Cliente('Alice', 88822233309);


const contaCorrenteBernardo = new ContaCorrente(cliente1, 1001);
const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
const contaSalario = new ContaSalario(cliente1);

contaSalario.depositar(100);
contaSalario.sacar(10);

console.log(contaSalario);

// const conta2 = new ContaCorrente(cliente2, 102);
// contaCorrenteBernardo.transferir(200, conta2);

// console.log(JSON.stringify(cliente1));
// console.log(JSON.stringify(cliente2));
// console.log(`${JSON.stringify(cliente1)}, \n${JSON.stringify(cliente2)}`);
//console.log(ContaCorrente.numeroDeContas);