let carsSpeed = [1.7, 3, 2.3, 2.8, 2, 3]
let xCars = [600, 600, 600, 600, 600, 600]
let yCars = [40, 150, 260, 96, 210, 312]

let xActor = 100
let yActor = 368
let hit = false

function movingActor() {
  if (keyIsDown(UP_ARROW)) {
    yActor -= 3
  }
  if (keyIsDown(DOWN_ARROW)) {
    if (yActor < 368) {
      yActor += 3
    }
  }
}

function movingCars() {
  for (i = 0; i < xCars.length && carsSpeed.length; i++) {
    xCars[i] -= carsSpeed[i]
  }
}

function backCarToInitialPosition() {
  for (let i = 0; i < imageCars.length; i++) {
    if (xCars[i] < -30) {
      xCars[i] = 600
    }
  }
}

function verifyCollision() {
  for (let i = 0; i < imageCars.length; i++) {
    hit = collideRectCircle(xCars[i], yCars[i], 50, 40, xActor, yActor, 15)
    if (hit) {
      backToStart()
      collisionSound.play()
      if (myPoints > 0) {
        myPoints -= 1
      }
    }
  }
}

function backToStart() {
  yActor = 366
}
