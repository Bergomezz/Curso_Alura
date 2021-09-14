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
    }]
};

// console.log(cliente)

cliente.dependentes.push({
    nome: 'Camila',
    parentesco: 'Esposa',
    dataNasc: '15/07/1978',
});

// console.log(cliente)

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc === '27/04/2020');

console.log(`Feliz dia das Crianças para o ${filhaMaisNova[0].nome}`);