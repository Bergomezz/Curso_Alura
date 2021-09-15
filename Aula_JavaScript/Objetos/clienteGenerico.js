function Clientes(nome, cpf, email, saldo) {
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function (valor) {
        this.saldo += valor
    }
};

const bernardo = new Clientes('Bernardo', '987234564', 'teste@teste.com', 1000);

console.log(bernardo)