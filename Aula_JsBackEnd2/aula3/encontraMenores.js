const listaLivros = require('./array')

function encontraMenores(pivot, array) {
  let menores = 0

  for (let i = 0; i < array.length; i++) {
    let produtoAtual = array[i]
    if (produtoAtual.preco < pivot.preco) {
      menores++
    }
  }

  trocaDeLugares(array, array.indexOf(pivot), menores)
  return array
}

function trocaDeLugares(array, de, para) {
  const elem1 = array[de]
  const elem2 = array[para]

  array[para] = elem1
  array[de] = elem2
}

function divideNoPivot(array) {
  let pivot = array[Math.floor(array.length / 2)]
  console.log(pivot)
  encontraMenores(pivot, array)

  let valoresMenores = 0

  for (let i = 0; i < array.length; i++) {
    let atual = array[i]

    if (atual.preco <= pivot.preco && atual !== pivot) {
      trocaDeLugares(array, i, valoresMenores)
      valoresMenores++
    }
  }

  return array
}

console.log(divideNoPivot(listaLivros))

//console.log(encontraMenores(listaLivros[2], listaLivros))
