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

var closeOne = document.querySelector(".rounded-corners:nth-of-type(3) .close");
var closeTwo = document.querySelector(".rounded-corners:nth-of-type(4) .close");
var closeThree = document.querySelector(".rounded-corners:nth-of-type(5) .close");

closeOne.addEventListener('click', closePlayerOne);
closeTwo.addEventListener('click', closePlayerTwo);
closeThree.addEventListener('click', closePlayerThree);

function closePlayerOne(){
    console.log("clicked");
    playerOne.classList.add('hidden');
}

function closePlayerTwo(){
    console.log("clicked");
    playerTwo.classList.add('hidden');
}

function closePlayerThree(){
    console.log("clicked");
    playerThree.classList.add('hidden');
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
// let muziek = new Audio("ripples.mp3");
let muziek = new Audio("ophelia.mp3");

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


// api ophalen

let base = "https://fdnd.directus.app/items"
let endpoint = "/person?filter[squads][squad_id][tribe][name]=CMD%20Minor%20Web%20Dev&filter[squads][squad_id][cohort]=2526&sort=name&filter[fav_tag][_nempty] "
let url = base + endpoint

let deLijst = document.querySelector("ul")

// getMinorMensen();

// async function getMinorMensen() {
//     let response = await fetch(url);
//     let responseJSON = await response.json();
//     let deMinormensen = responseJSON.data;

//     let cardsDiv = document.querySelector(".cards-div");
//     cardsDiv.innerHTML = "";

//     deMinormensen
//         .filter(persoon => persoon.avatar)
//         .forEach(persoon => {
//             let cardHTML = `
//             <article class="artist-card">
//                 <img src="${persoon.avatar}" alt="foto van ${persoon.name}">
//                 <div>
//                     <p>${persoon.name}</p>
//                 </div>
//             </article>`;

//             cardsDiv.insertAdjacentHTML("beforeend", cardHTML);
//         });
// }


getMinorMensen();

async function getMinorMensen() {
    let response = await fetch(url);
    let responseJSON = await response.json();
    let deMinormensen = responseJSON.data;

    let cardsDiv = document.querySelector(".cards-div");
    let allesWeergeven = document.querySelector(".fans div:first-child p");

    const gefilterd = deMinormensen.filter(persoon => 
        persoon.avatar && !persoon.avatar.match(/github\.com\/[^\/]+$/)
    );

    function renderKaarten(toonAlles) {
        cardsDiv.innerHTML = "";
        const teTonenPersonen = toonAlles ? gefilterd : gefilterd.slice(0, 4);

        teTonenPersonen.forEach(persoon => {
            let cardHTML = `
            <article class="artist-card">
                <img src="${persoon.avatar}" alt="foto van ${persoon.name}">
                <div>
                    <p>${persoon.name}</p>
                </div>
            </article>`;
            cardsDiv.insertAdjacentHTML("beforeend", cardHTML);
        });

        allesWeergeven.textContent = toonAlles ? "Minder weergeven" : "Alles weergeven";
    }

    renderKaarten(false);

    let allesZichtbaar = false;
    allesWeergeven.addEventListener("click", () => {
        allesZichtbaar = !allesZichtbaar;
        renderKaarten(allesZichtbaar);
    });
}

// claude https://claude.ai/chat/f6fc1d82-5bcb-46ed-be68-ef7d31d1a6c0
const mediaQuery = window.matchMedia('(max-width: 475px)');
const div = document.querySelector('.rounded-corners:nth-of-type(3)');

function handleMediaChange(e) {
    if (e.matches) {
        div.classList.add('hidden');
    } else {
        div.classList.remove('hidden');
    }
}

// Check bij laden
handleMediaChange(mediaQuery);

// Luister naar veranderingen
mediaQuery.addEventListener('change', handleMediaChange);


// mobile tab tussen songs en albums

const songsTab = document.querySelector('nav ul li:nth-of-type(1) a');
const albumsTab = document.querySelector('nav ul li:nth-of-type(2) a');

const songsSection = document.querySelector('.rounded-corners:nth-of-type(2)');
const albumsSection = document.querySelector('.rounded-corners:nth-of-type(1)');

songsTab.addEventListener('click', changeToSongs);
albumsTab.addEventListener('click', changeToAlbums);

function changeToSongs(){
    songsSection.classList.remove('hidden');
    albumsSection.classList.add('hidden');
}

function changeToAlbums(){
    albumsSection.classList.remove('hidden');
    songsSection.classList.add('hidden');
}