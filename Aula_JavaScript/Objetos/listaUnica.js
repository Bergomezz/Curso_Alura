const clientes = [
    {
        nome: 'Bernardo',
        idade: 36,
        cpf: '9759823450',
        dependentes: [{
            nome: 'Benício',
            parentesco: 'Filho',
            dataNasc: '27/04/2020',
        }]
    },
    {
        nome: 'Camila',
        idade: 43,
        cpf: '877256923487',
        dependentes: [{
            nome: 'Benício',
            parentesco: 'Filho',
            dataNasc: '27/04/2020',
        }],
    },
];

const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes];

console.log(listaDependentes)