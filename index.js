function setUpButtons() {
    const drumButtons = document.querySelectorAll(".drum")
    for (let button = 0; button <= drumButtons.length; button++) {
        drumButtons[button].addEventListener("click", () => {
            drumButtons[button].style.color = "white"
            setTimeout(()=>{
                drumButtons[button].style.color = "#DA0463"
            },1000)
            switch (button) {
                case 0:
                    playAudio("sounds/tom-1.mp3");
                case 1:
                    playAudio("sounds/kick-bass.mp3")
                case 2:
                    playAudio("sounds/snare.mp3")
                case 3:
                    playAudio("sounds/tom-1.mp3")
                case 4:
                    playAudio("sounds/tom-2.mp3")
                case 5:
                    playAudio("sounds/tom-3.mp3")
                default:
                    playAudio("sounds/tom-4.mp3")
            }
        })
    }
}

function playAudio(audioPath) {
    const audio = new Audio(audioPath).play()
}


setUpButtons()


function handleDrumClick() {
    alert("Button clicked")
}