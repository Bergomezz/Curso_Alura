const listaLivros = require('./array')
const trocaDeLugares = require('./encontraMenores')

function quickSort(array, esquerda, direita) {
  if (array.length > 1) {
    let indiceAtual = particiona(array, esquerda, direita)
    if (esquerda < indiceAtual - 1) {
      quickSort(array, esquerda, indiceAtual - 1)
    }
    if (indiceAtual < direita) {
      quickSort(array, indiceAtual, direita)
    }
  }
  return array
}

function particiona(array, esquerda, direita) {
  let pivot = array[Math.floor((esquerda + direita) / 2)]
  let atualEsquerda = esquerda
  let atualDireita = direita

  while (atualEsquerda <= atualDireita) {
    while (array[atualEsquerda].preco < pivot.preco) {
      atualEsquerda++
    }
    while (array[atualDireita].preco > pivot.preco) {
      atualDireita--
    }

    if (atualEsquerda <= atualDireita) {
      trocaDeLugares(array, atualEsquerda, atualDireita)
      atualEsquerda++
      atualDireita--
    }
  }
  return atualEsquerda
}

console.log(quickSort(listaLivros, 0, listaLivros.length - 1))
