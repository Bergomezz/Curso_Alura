let actor, car1, car2, car3, street

function images() {
  actor = new PIXI.Sprite.from('/img/ator-1.png')
  street = new PIXI.Sprite.from('/img/estrada.png')
  car1 = new PIXI.Sprite.from('/img/carro-1.png')
  car2 = new PIXI.Sprite.from('/img/carro-2.png')
  car3 = new PIXI.Sprite.from('/img/carro-3.png')
}
images()

export default images
