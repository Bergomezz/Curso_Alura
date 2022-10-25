const livros = require('./listaLivros')
const troca = require('./controllers/troca')

function insertionSort (list){
  for(let i = 0; i < list.length; i++){
    let analise = i
    while(analise > 0 && list[analise].preco < list[analise - 1].preco){

      troca(list, analise)

      analise--
    }
  }
  console.log(list)
}

insertionSort(livros)
