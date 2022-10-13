let xBall = 300
let yBall = 200
let diameter = 22
let arc = diameter / 2

let xBallSpeed = 6
let yBallSpeed = 6

//Our racket variable
let xRect = 5
let yRect = 150
let rectHeight = 90
let rectWidth = 10

//Opposition racket variable
let xRack = 585
let yRack = 150
let oppositionYSpeed = 2

//scoreboard
let myScore = 0
let oppositionScore = 0

function ball() {
  circle(xBall, yBall, diameter)
}
function ballMoviments() {
  xBall += xBallSpeed
  yBall += yBallSpeed
}
function colliderEdge() {
  if (xBall + arc > width || xBall - arc < 0) {
    xBallSpeed *= -1
  }
  if (yBall + arc > height || yBall - arc < 0) {
    yBallSpeed *= -1
  }
}

function racket(x, y) {
  rect(x, y, rectHeight, rectWidth)
}

function showRacket(x, y) {
  racket(x, y)
}
function showRacket() {
  racket(xRack, yRack)
}

function movingRacket() {
  if (keyIsDown(UP_ARROW)) {
    yRect -= 10
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRect += 10
  }
}

function movingOppositionRacket() {
  oppositionYSpeed = yBall - yRack - rectWidth / 2 - 30

  yRack += oppositionYSpeed
}

function verifyColliderRacket(x, y) {
  if (
    xBall - arc < x + rectWidth &&
    yBall - arc < y + rectHeight &&
    yBall + arc > y
  ) {
    xBallSpeed *= -1
  }
}

function includingScoreboard(scoreboard1, scoreboard2) {
  textAlign(CENTER)
  textSize(16)
  fill(color(255, 140, 0))
  fill(255)
  text(scoreboard1, 170, 26)
  fill(255)
  text(scoreboard2, 470, 26)
}

function makingScore() {
  if (xBall > 590) {
    myScore += 1
  }
  if (xBall < 10) {
    oppositionScore += 1
  }
}

function setup() {
  createCanvas(600, 400)
}

function draw() {
  background(0)
  ball()
  ballMoviments()

  colliderEdge()
  showRacket(xRect, yRect)
  showRacket(xRack, yRack)
  movingRacket()
  movingOppositionRacket()
  verifyColliderRacket(xRect, yRect)
  verifyColliderRacket(xRack, yRack)
  includingScoreboard(myScore, oppositionScore)
  makingScore()
}
