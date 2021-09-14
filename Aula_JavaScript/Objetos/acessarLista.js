const cliente = {
    nome: 'Bernardo',
    idade: 36,
    cpf: '9759823450',
    email: 'teste@email.com'
};

const chaves = ['nome', 'idade', 'cpf', 'email'];

// console.log(cliente[chaves[0]])

chaves.forEach(info => console.log(cliente[info]));