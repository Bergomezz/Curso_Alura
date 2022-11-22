const cliente = {
  nome: 'Joao',
  idade: 24,
  email: 't@t.com',
  telefone: ['8573147915378941', '7845091283540'],
  saldo: 200,
  efetuaPagamento: function (valor) {
    if (valor > this.saldo) {
      return console.log('Saldo insuficiente')
    } else {
      this.saldo -= valor
      console.log(
        `Pagamento efetuado com sucesso. Seu novo saldo é: ${this.saldo}`
      )
    }
  },
}

cliente.efetuaPagamento(800)
