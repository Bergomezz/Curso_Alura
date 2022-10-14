let xBall = 300
let yBall = 200
let diameter = 22
let arc = diameter / 2

let xBallSpeed = 6
let yBallSpeed = 6

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

export default { ball, ballMoviments, colliderEdge }
