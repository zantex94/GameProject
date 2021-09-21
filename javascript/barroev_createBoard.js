/******* DEFINE VARIABLES *********/
// variables for board
let board           = document.createElement('section');
let diceContainer   = document.createElement('div');
let playerContainer = document.createElement('div');
let playerScore     = document.createElement('div');
let roll            = document.createElement('button');
//let scoreboard      = document.createElement('div');
/**********************************/


/******* SET ATTRIBUTES FOR VARIABLES *********/
// set attributes  
board.setAttribute('id', 'board');
diceContainer.setAttribute('class', 'diceContainer');
playerContainer.setAttribute('class', 'playerContainer');
playerScore.setAttribute('class', 'playerScore');
roll.setAttribute('class', 'rollBtn');
//scoreboard.setAttribute('class', 'scoreboard');
/**********************************/


/******* WRITE INNERHTML *********/
// write content to new HTML elements
roll.innerHTML = 'Roll dice';
/**********************************/


/******* CREATE BOARD FUNCTION *********/
// draw board with players, dice and scores

function createBoard(){
    // appendings 
    page.appendChild(board);
    board.append(diceContainer, playerContainer); 
    createPlayers();
    createDices();
    diceContainer.append(roll);
}
/**********************************/


/******* CREATE PLAYERS FUNCTION *********/
// draw and add players to board
function createPlayers(){
    
    // define players as players array
    let players             = gameSettings.players;
    
    // add players equal to the number of players saved in game settings
    for(let i = 0; i < players.length; i++){
        let playerNames     = document.createTextNode(players[i].name);
        let playerScores    = document.createTextNode(players[i].score);

        // define variables as html elements
        let playerbox       = document.createElement('div');
        let player          = document.createElement('div');
        let playername      = document.createElement('p');
        let playerscore     = document.createElement('p');

        // appendings
        playerContainer.appendChild(playerbox); 
        playerbox.appendChild(player); 
        player.append(playername, playerscore);
        playername.append(playerNames);
        playerscore.append(playerScores);

        // set attributes
        playerbox.setAttribute('class', 'playerbox');
        player.setAttribute('class', 'player');
        playername.setAttribute('class', 'playername')
        playerscore.setAttribute('class', 'playerscore');
    }
}
/**********************************/



/******* CREATE DICE FUNCTION *********/
// draw and add dice to game
function createDices(){
    let dices       = gameSettings.dices;
    
    // add dice equal to number of dice saved in game settings
    for(let i = 0; i < dices; i++){
        let dice    = document.createElement('div');
        dice.setAttribute('class', 'dice');
        dice.innerHTML = '2';   
        diceContainer.append(dice);    
    }
}
/**********************************/