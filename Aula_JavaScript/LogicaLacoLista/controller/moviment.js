let carsSpeed = [1.7, 3, 2.3]

function movingActor() {
  if (keyIsDown(UP_ARROW)) {
    yActor -= 3
  }
  if (keyIsDown(DOWN_ARROW)) {
    yActor += 3
  }
}

function movingCars() {
  xCars[0] -= carsSpeed[0]
  xCars[1] -= carsSpeed[1]
  xCars[2] -= carsSpeed[2]
}

function backCarToInitialPosition() {
  if (xCars[0] < -30) {
    xCars[0] = 600
  }
  if (xCars[1] < -30) {
    xCars[1] = 600
  }
  if (xCars[2] < -30) {
    xCars[2] = 600
  }
}
