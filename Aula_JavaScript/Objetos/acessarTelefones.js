const cliente = {
    nome: 'Bernardo',
    idade: 36,
    cpf: '9759823450',
    email: 'teste@email.com',
    fones: []
};

console.log(cliente)

cliente.fones.push('558971364982')
cliente.fones.push('551325789628')

cliente.fones.forEach(fone => console.log(fone));