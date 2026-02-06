// var tinboxClosed = document.querySelector("section:nth-of-type(2) div:nth-of-type(1)");

// var tinboxOpen = document.querySelector("section:nth-of-type(2) div:nth-of-type(2)");

// deCheckbox.addEventListener('click', toggleVisibility);


// function toggleVisibility(){
//     if ()
// }

var songOne = document.querySelector(".populair-items:nth-of-type(1)")
var songTwo = document.querySelector(".populair-items:nth-of-type(2)")
var songThree = document.querySelector(".populair-items:nth-of-type(3)")

songOne.addEventListener('click', changePlayerOne);
songTwo.addEventListener('click', changePlayerTwo);
songThree.addEventListener('click', changePlayerThree);

var playerOne = document.querySelector(".rounded-corners:nth-of-type(3)");
var playerTwo = document.querySelector(".rounded-corners:nth-of-type(4)");
var playerThree = document.querySelector(".rounded-corners:nth-of-type(5)");

// playerOne.addEventListener('click', changePlayerOne);
// playerTwo.addEventListener('click', changePlayerTwo);
// playerThree.addEventListener('click', changePlayerThree);

function changePlayerOne(){
    console.log("clicked");

    playerOne.classList.remove('hidden');
    playerTwo.classList.add('hidden');
    playerThree.classList.add('hidden');
}

function changePlayerTwo(){
    console.log("clicked");
    playerTwo.classList.remove('hidden');
    playerOne.classList.add('hidden');
    playerThree.classList.add('hidden');
}

function changePlayerThree(){
    console.log("clicked");
    playerThree.classList.remove('hidden');
    playerOne.classList.add('hidden');
    playerTwo.classList.add('hidden');
}


// function changePlayer(){
//     console.log("clicked");

//     if (playerOne.classList.contains('hidden')){
//         playerOne.classList.remove('hidden');
//         playerTwo.classList.add('hidden');
//         playerThree.classList.add('hidden');
//     }
//     else if (playerTwo.classList.contains('hidden')){
//         playerTwo.classList.remove('hidden');
//         playerOne.classList.add('hidden');
//         playerThree.classList.add('hidden');
//     }
//     else if (playerThree.classList.contains('hidden')){
//         playerThree.classList.remove('hidden');
//         playerOne.classList.add('hidden');
//         playerTwo.classList.add('hidden');
//     }
// }


var playButton = document.querySelector(".buttons svg:nth-of-type(3)");
var pauseButton = document.querySelector(".buttons svg:nth-of-type(4)");

playButton.addEventListener('click', playMusic);
pauseButton.addEventListener('click', pauseMusic);
let muziek = new Audio("ripples.mp3");

function playMusic(){
    console.log("play");
    playButton.classList.add('hidden');
    pauseButton.classList.remove('hidden');

    muziek.play()
}

function pauseMusic(){
    console.log("pause");
    playButton.classList.remove('hidden');
    pauseButton.classList.add('hidden');

    muziek.pause()
}