const cliente = {
    nome: 'Bernardo',
    idade: 36,
    cpf: '9759823450',
    email: 'teste@email.com',
    fones: ['558971364982', '551325789628'],

    dependentes: [{
        nome: 'Benício',
        parentesco: 'Filho',
        dataNasc: '27/04/2020',
    },
    {
        nome: 'Camila',
        parentesco: 'Esposa',
        dataNasc: '15/07/1978',
    }
    ],
    saldo: 100,
    depositar: function (valor) {
        this.saldo += valor
    }
};

let relatorio = '';

for (let info in cliente) {
    if (typeof cliente[info] === 'object' || typeof cliente[info] === 'function') {
        continue
    } else {
        relatorio += `
        ${info} - ${cliente[info]}
        `
    };
};

console.log(relatorio)