const client = {
  nome: 'Andre',
  idade: 32,
  CPF: '1111122222333444',
  email: 't@t.com',
}

console.log(
  `O nome do cliente é ${client.nome} e sua idade é ${client.idade} anos`
)

console.log(
  `Os 3 primeiros digitos do CPF do ${client.nome} é ${client.CPF.substring(
    0,
    3
  )}`
)
