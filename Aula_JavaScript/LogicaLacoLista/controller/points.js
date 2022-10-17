let myPoints = 0
let width = screenWidth / 3

function showThePoints() {
  textAlign(CENTER)
  textSize(25)
  fill(color(255, 240, 60))
  text(myPoints, width, 27)
}

function makingPoints() {
  if (yActor < 15) {
    myPoints += 1
    backToStart()
    scoreSound.play()
  }
}
