
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// detecting the click
for(var i=0; i<numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() { 
        playAudio(this.innerHTML);  
        buttonAnimation(this.innerHTML);         
    });
}

// detecting the key press
document.addEventListener('keydown', function (event) {
    playAudio(event.key); 
    buttonAnimation(event.key);
}); 

function playAudio(keyLetter) {
    switch (keyLetter) {
        case 'w':                
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case 'a':
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case 's':
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case 'd':
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case 'j':
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case 'k':
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case 'l':
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;

        default:
            console.log(this.innerHTML);
            break;
    }
}

// creating animation for the pressed button
function buttonAnimation(currentKey) {
    var activeButton = document.querySelector('.' + currentKey);
    activeButton.classList.add('pressed');    

    setTimeout(function() {
        activeButton.classList.remove('pressed');
    }, 100);    
}






// var drumAudio = new Audio("sounds/tom-1.mp3");
// drumAudio.play();
// this.style.color = 'white';