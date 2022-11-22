const cliente = {
  nome: 'Joao',
  idade: 24,
  email: 't@t.com',
  telefone: ['8573147915378941', '7845091283540'],
}

cliente.endereco = [
  {
    rua: 'rua ze ramalho',
    numero: 468,
    apartamento: true,
    complemento: 'apto 22',
  },
]

function ligaParaCliente(telefoneComercial, telefoneResidencial) {
  console.log(`Ligando para ${telefoneComercial}`)
  console.log(`Ligando para ${telefoneResidencial}`)
}

ligaParaCliente(...cliente.telefone)

const encomenda = {
  destinatario: cliente.nome,
  ...cliente.endereco[0],
}

console.log(encomenda)
