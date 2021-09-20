'use strict';

const addPlayerBtn = $('addPlayer');
const playersList = $('playersList');
const start = $('startGame');

let page = document.querySelector('.pageStructure');

// empty variable objects
let players = {};
let gameSettings = {};

// empty variable arrays
let playersArr = [];


function addPlayer(e){
    let playerName = $('player').value;
    let score = 0;

    // create HTML
    playersList.innerHTML = '';
 
    // players object, holds names and scores
    players = {
        name: playerName,
        score: score
    }
    // push player object into playerArray to store data for each player
    playersArr.push(players);

    playersArr.forEach(element => {
        let li = document.createElement('li');
        let litext = document.createTextNode(element.name);
        li.appendChild(litext);
        li.setAttribute('class', 'playerName');
        playersList.appendChild(li);
        
    });
    console.log(playersArr);
        
}

function loadGame (e){
    let maxpoints = parseInt($('maxpoints').value);
    let dices = parseInt($('diceAmount').value); 

    // assign values to gameSettings object
    gameSettings = {
        maxpoints: maxpoints,
        dices: dices,
        players: playersArr
    }
    
    // create board
    let board = document.createElement('section');
    board.setAttribute('id', 'board');
    let diceContainer = document.createElement('div');
    diceContainer.setAttribute('class', 'diceContainer');
    let playerContainer = document.createElement('div');
    playerContainer.setAttribute('class', 'playerContainer');
    let playerbox = document.createElement('div');
    playerbox.setAttribute('class', 'playerbox');
    let scoreboard = document.createElement('div');
    scoreboard.setAttribute('class', 'score');
    let die = document.createElement('div');
    die.setAttribute('class', 'dice');
    
    // append childs
    page.appendChild(board);
    board.append(diceContainer, playerContainer); 
    diceContainer.appendChild(die);
    playerContainer.append(playerbox, scoreboard);


    console.log(gameSettings);
}


addPlayerBtn.addEventListener('click', addPlayer);
start.addEventListener('click', loadGame);


