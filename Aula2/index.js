class Cliente{
    nome;
    cpf;
};

class ContaCorrente{
    agencia;
    _saldo;

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return(valor);
        };
    };

    depositar(valor){
        if(valor > 0){
            return;
        };
        this._saldo += valor;
    };
};

const cliente1 = new Cliente();
cliente1.nome = 'Bernardo';
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = 'Alice'
cliente2.cpf = 88822233309;

const contaCorrenteBernardo = new ContaCorrente();
contaCorrenteBernardo._saldo = 0;
contaCorrenteBernardo.agencia = 1001;

contaCorrenteBernardo.depositar(100);
contaCorrenteBernardo.depositar(100);
contaCorrenteBernardo.depositar(100);

const valorSacado = contaCorrenteBernardo.sacar(50);

console.log(contaCorrenteBernardo);