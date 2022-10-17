let imageActor
let imageStreet
let imageCar
let imageCar2
let imageCar3
let soundTrack
let collisionSound
let scoreSound

function preload() {
  imageStreet = loadImage('/img/estrada.png')
  imageActor = loadImage('/img/ator-1.png')
  imageCar = loadImage('/img/carro-1.png')
  imageCar2 = loadImage('/img/carro-2.png')
  imageCar3 = loadImage('/img/carro-3.png')
  imageCars = [imageCar, imageCar2, imageCar3, imageCar, imageCar2, imageCar3]

  soundTrack = loadSound('../sound/trilha.mp3')
  collisionSound = loadSound('../sound/colidiu.mp3')
  scoreSound = loadSound('../sound/pontos.wav')
}

function showCars() {
  for (let i = 0; i < imageCars.length; i = i + 1) {
    image(imageCars[i], xCars[i], yCars[i], 50, 40)
  }
}

function showActor() {
  image(imageActor, xActor, yActor, 30, 30)
}
