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

function oferecrSeguro(obj) {
    const propsClientes = Object.keys(obj);
    if (propsClientes.includes('dependentes')) {
        console.log(`Oferta de seguro de vida para ${obj.nome}`)
    };
};

oferecrSeguro(cliente)