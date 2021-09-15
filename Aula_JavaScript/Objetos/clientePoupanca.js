function Clientes(nome, cpf, email, saldo) {
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function (valor) {
        this.saldo += valor
    }
};
const bernardo = new Clientes('Bernardo', '98712498876', 'tester@tester.com', 1000, 100);

function ClientePoupanca(nome, cpf, email, saldo, saldoPoup) {
    Clientes.call(this, nome, cpf, email, saldo)
    this.saldoPoup = saldoPoup
};

const camila = new ClientePoupanca('Camila', '98712498876', 'tester@tester.com', 2000, 10000);

// console.log(camila)

ClientePoupanca.prototype.depositarPoup = function (valor) {
    this.saldoPoup += valor
};

camila.depositarPoup(5000);
// console.log(camila)



console.log(bernardo.hasOwnProperty("saldoPoup"))
console.log(camila.hasOwnProperty("saldoPoup"))
console.log(bernardo instanceof Clientes)
console.log(typeof bernardo)
console.log(typeof camila)
console.log(camila instanceof ClientePoupanca)
console.log(Function.prototype.isPrototypeOf(Clientes))
console.log(Clientes.constructor === Function)