const cliente = {
    nome: 'Bernardo',
    idade: 36,
    cpf: '9759823450',
    email: 'teste@email.com'
};
console.log(`Meu nome é ${cliente.nome} e minha idade é ${cliente.idade}`);
console.log(`Cadastrado no CPF: ${cliente.cpf.substr(0,3)}`);