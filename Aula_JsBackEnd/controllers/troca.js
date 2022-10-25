function troca(list, analise){
  let itemAnalise = list[analise];
  console.log('posição atual', analise)
  console.log('livro atual', list[analise])
  let itemAnterior = list[analise - 1];
  console.log('livro menor preço', list[analise - 1])

  list[analise] = itemAnterior
  list[analise - 1] = itemAnalise
}

module.exports = troca