let screenWidth = 500
let screenHeight = 400

let xCars = [600, 600, 600]
let yCars = [40, 150, 260]

let xActor = 100
let yActor = 366

function setup() {
  createCanvas(screenWidth, screenHeight)
}

function draw() {
  background(imageStreet)
  showActor()
  showCars()
  movingCars()
  movingActor()
  backCarToInitialPosition()
}
