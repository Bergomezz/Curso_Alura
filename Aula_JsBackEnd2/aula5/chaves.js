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

const chavesDoObjeto = Object.keys(cliente)

console.log(chavesDoObjeto)

if (!chavesDoObjeto.includes('endereco')) {
  console.error('Erro. É necessáro ter um endereço cadastrado')
}
