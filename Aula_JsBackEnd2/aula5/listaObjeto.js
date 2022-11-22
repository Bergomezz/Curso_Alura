const cliente = {
  nome: 'Joao',
  idade: 24,
  email: 't@t.com',
  telefone: ['8573147915378941', '7845091283540'],
}

cliente.endereco = [
  {
    rua: 'ze ramalho',
    numero: 468,
    apartamento: true,
    complemento: 'apto 22',
  },
]

cliente.endereco.push({
  rua: 'castanha',
  numero: 433,
  apartamento: false,
  complemento: '',
})

console.log(cliente)
