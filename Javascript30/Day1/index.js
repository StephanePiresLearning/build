
window.addEventListener('keydown', function playSounds (event){
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`)
    console.log(audio)
    if(!audio){
        return
    }
    key.classList.add('playing')
    audio.currentTime = 0
    audio.play()
    setTimeout(function excuteAtTheEnd(){
        key.classList.remove('playing')
    }, 100)

})

const keys = document.querySelectorAll('.key')
keys.forEach(function addListener (key) {
})

function removeTransition(event){
    if (event.propertyName !== 'transition') return
    console.log('toto')
    console.log(event.propertyName)
    key.addEventListener('transitionend', removeTransition)
}