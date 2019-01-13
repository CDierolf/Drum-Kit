
function playNote(selector) {
    var audio;
    switch (selector) {
        case 'w':
            audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case 'a':
            audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case 's':
            audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case 'd':
            audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case 'j':
            audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case 'k':
            audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case 'l':
            audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
    }
    // Animate the button
    animateDrum(selector);
}

function animateDrum(selector) {
    var activeBtn = document.querySelector("." + selector);

    setTimeout(function() {
        activeBtn.classList.remove("pressed");
    }, 100 );

    activeBtn.classList.add("pressed");
}

function bangTheDrum() {
    // Listen for a key press event first
    document.addEventListener("keydown", function(event) {
            playNote(event.key);
        });
    // otherwise listen for the click event
    var buttonArr = document.querySelectorAll(".drum");
    buttonArr.forEach(function(element) {
        element.addEventListener("click", function() {
            playNote(element.innerHTML);
        });
    });
    
}

bangTheDrum();