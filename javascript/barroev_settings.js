'use strict';

/******* DEFINE VARIABLES *********/

const addPlayerBtn  = $('addPlayer');
const playersList   = $('playersList');
const start         = $('startGame');
let page            = document.querySelector('.pageStructure');

// empty variable objects
let players         = {};
let gameSettings    = {};

// empty variable arrays
let playersArr      = [];
/**********************************/


/******* ADD PLAYERS FUNCTION *********/
// add players to game 
function addPlayer(){
    let playerName          = $('player').value;
    let score               = 0;
    
    // create object of players with name and score
    players = {
        name: playerName,
        score: score
    }
    // push players into playerArray to store data
    playersArr.push(players);

    // create empty list of players
    playersList.innerHTML   = '';
    // for each player in playerArray append to list to see input names
    playersArr.forEach(element => {
        let li = document.createElement('li');
        let litext = document.createTextNode(element.name);
        li.appendChild(litext);
        li.setAttribute('class', 'playerName');
        playersList.appendChild(li);
        
    });        
}
/**********************************/

/******* LOAD GAME FUNCTION *********/
// save game settings and draw board on start
function loadGame (e){
    let maxpoints   = parseInt($('maxpoints').value);
    let dices       = parseInt($('diceAmount').value); 

    // assign values to gameSettings object
    gameSettings    = {
        maxpoints: maxpoints,
        dices: dices,
        players: playersArr
    }

    createBoard();
    console.log(gameSettings);
}

/**********************************/

/******* EVENT LISTENERS *********/

addPlayerBtn.addEventListener('click', addPlayer);

start.addEventListener('click', loadGame);


