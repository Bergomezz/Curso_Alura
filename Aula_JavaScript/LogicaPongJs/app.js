let SCREENWIDTH = 1270
let SCREENHIEGHT = 720

let app = new PIXI.Application({ width: SCREENWIDTH, height: SCREENHIEGHT })
document.body.appendChild(app.view)

let sprite = PIXI.Sprite.from('/html/img/sample.png')

app.stage.addChild(sprite)

let elapsed = 0.0
function speed() {
  sprite.x = 150.0 + Math.cos(elapsed / 50.0) * 100.0
}

app.ticker.add(delta => {
  elapsed += delta
  speed()
})
