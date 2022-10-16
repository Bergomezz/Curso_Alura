let imageActor
let imageStreet

function preload() {
  imageStreet = loadImage('/img/estrada.png')
  imageActor = loadImage('/img/ator-1.png')
  imageCar = loadImage('/img/carro-1.png')
  imageCar2 = loadImage('/img/carro-2.png')
  imageCar3 = loadImage('/img/carro-3.png')
  imageCars = [imageCar, imageCar2, imageCar3]
}

function showCars() {
  for (let i = 0; i < imageCars.length; i = i++) {
    image(imageCars[i], xCars[i], yCars[i], 50, 40)
  }
}

function showActor() {
  image(imageActor, xActor, yActor, 30, 30)
}
