const alunos = ['João', 'Juliana', 'Caio', 'Ana']

const mediaDosAlunos = [10, 7, 9, 6]

const listaDeAlunosEMedia = [alunos, mediaDosAlunos]

function exibeNomeENota(aluno) {
  if (listaDeAlunosEMedia[0].includes(aluno)) {
    const [alunos, media] = listaDeAlunosEMedia

    const indice = alunos.indexOf(aluno)
    const mediaDoAluno = media[indice]

    console.log(`${aluno} tem a média geral: ${mediaDoAluno}`)
  } else {
    console.log('Aluno não encontrado')
  }
}

exibeNomeENota('Caio')
