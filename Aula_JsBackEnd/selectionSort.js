const livros = require('./listaLivros');
const menorValor = require('./menorValor');


for (let atual = 0; atual < livros.length - 1; atual++) {
  let menor = menorValor(livros, atual)

  let livroAtual = livros[atual];
  console.log('posição atual', atual)
  console.log('livro atual', livros[atual])
  let livroMenorPreco = livros[menor];
  console.log('livro menor preço', livros[menor])

  livros[atual] = livroMenorPreco
  livros[menor] = livroAtual
}

// livros.forEach((_, index) => {
//   let menor = menorValor(livros, index)

//   let livroAtual = livros[index];
//   console.log('posição atual', index)
//   console.log('livro atual', livros[index])
//   let livroMenorPreco = livros[menor];
//   console.log('livro menor preço', livros[menor])

//   livros[index] = livroMenorPreco
//   livros[menor] = livroAtual
// })

console.log(livros)