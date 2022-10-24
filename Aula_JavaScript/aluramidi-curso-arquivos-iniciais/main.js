function playSound(idAudioTag){
  const element = document.querySelector(idAudioTag)
  
  if(element && element.localName === "audio"){
    element.play()
  }else{
    console.error('404')
  }
}


const keyArray = document.querySelectorAll('.tecla')



for(let index = 0; index < keyArray.length; index++){
  const keys = keyArray[index]
  const instrument = keys.classList[1]
  const idAudio = `#som_${instrument}`

  keys.onclick = function () {
    playSound(idAudio)
  }

  keys.onkeydown = function (e){
    console.log(e.code)
    if(e.code === 'Space' || e.code === 'Enter'){
      keys.classList.add('ativa')
    }
  }

  keys.onkeyup = function (){
    keys.classList.remove('ativa')
  }

}
