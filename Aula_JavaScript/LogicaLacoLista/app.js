import images from './controller/images'
const SCREENWIDTH = 1270
const SCREENHIEGHT = 720

PIXI.loader
  .add([
    '/img/ator-1.png',
    '/img/carro-1.png',
    '/img/carro-2.png',
    '/img/carro-3.png',
    '/img/estrada.png'
  ])
  .load(images)

PIXI.Assets.backgroundLoad('/img/estrada.png')
await PIXI.Assets.loadBundle('/img/estrada.png')

function configuring() {
  let app = new PIXI.Application({ width: SCREENWIDTH, height: SCREENHIEGHT })
  document.body.appendChild(app.view)
}
configuring()

function draw() {}
draw()
