class Cliente {
    constructor(nome, email, cpf, saldo) {
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    };
    depositar(valor) {
        if (valor > 0) {
            this.saldo += valor
        } else {
            return
        };
    };

    exibirSaldo() {
        console.log(this.saldo)
    };
};

class ClientePoupanca extends Cliente {
    constructor(nome, email, cpf, saldo, saldoPoupanca) {
        super(nome, email, cpf, saldo)
        this.saldoPoupanca = saldoPoupanca
    };
    depositarPoupanca(valor) {
        if (valor > 0) {
            this.saldoPoupanca += valor
        } else {
            return
        }
    };
    exibirSaldoPoupanca() {
        console.log(this.saldoPoupanca)
    };
};

const camila = new ClientePoupanca('Camila','tester@test.com','89723583745',35000,10000);

console.log(camila)
camila.depositarPoupanca(55000);
console.log(camila)
