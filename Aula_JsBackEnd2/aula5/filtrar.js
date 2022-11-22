const clientes = require('./clientes.json')

function filtrarApartamentoSC(lista) {
  return lista.filter(cliente => {
    return (
      cliente.endereco.apartamento &&
      !cliente.endereco.hasOwnProperty('complemento')
    )
  })
}

const filtrados = filtrarApartamentoSC(clientes)

console.log(filtrados)
