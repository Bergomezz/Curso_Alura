let screenWidth = 500
let screenHeight = 400

function setup() {
  createCanvas(screenWidth, screenHeight)
  soundTrack.loop()
}

function draw() {
  background(imageStreet)
  showActor()
  showCars()
  movingCars()
  movingActor()
  backCarToInitialPosition()
  verifyCollision()
  showThePoints()
  // showingLives()
  makingPoints()
}
