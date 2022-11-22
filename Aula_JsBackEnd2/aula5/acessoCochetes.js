const client = {
  nome: 'Andre',
  idade: 32,
  CPF: '1111122222333444',
  email: 't@t.com',
}

// console.log(
//   `O nome do cliente é ${client['nome']} e sua idade é ${client['idade']} anos`
// )

const chaves = ['nome', 'idade', 'CPF', 'email']

chaves.forEach(chave => {
  console.log(`A chave ${chave} tem valor ${client[chave]}`)
})
