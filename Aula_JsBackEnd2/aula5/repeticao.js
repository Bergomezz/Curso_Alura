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

for (let chave in cliente) {
  let tipo = typeof cliente[chave]
  if (tipo != `object` && tipo != `function`) {
    console.log(`A chave ${chave} tem o valor ${cliente[chave]}`)
  }
}
