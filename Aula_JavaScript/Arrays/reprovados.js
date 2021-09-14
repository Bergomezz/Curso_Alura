const nomes = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const notas = [7, 4.5, 8, 7.5];
                                //alunos
const reprovados = nomes.filter((_, indice) => notas[indice] < 5);
console.log(`Os alunos reprovados são: ${reprovados}`);