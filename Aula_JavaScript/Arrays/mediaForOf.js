const notas = [10, 6.5, 8, 7.5]

let somaDasNotas = 0

for (let element of notas) {
  somaDasNotas += element
}

const media = somaDasNotas / notas.length

console.log(media)
