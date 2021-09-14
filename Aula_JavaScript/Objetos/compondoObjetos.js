const cliente = {
    nome: 'Bernardo',
    idade: 36,
    cpf: '9759823450',
    email: 'teste@email.com',
    fones: ['558971364982', '551325789628'],
};

console.log(cliente);

cliente.dependente = {
    nome: 'Benício',
    parentesco: 'Filho',
    dataNasc: '27/04/2020',
};

cliente.dependente.nome = 'Benício Chaym Gomes'

console.log(cliente);