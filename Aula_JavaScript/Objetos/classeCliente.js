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
}

const bernardo = new Cliente('Bernardo', 'tester@tester.com', '9762431234', 0);
console.log(bernardo)
bernardo.depositar(1000)
console.log(bernardo)
bernardo.depositar(-100)
console.log(bernardo)
