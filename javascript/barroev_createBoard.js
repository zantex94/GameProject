function createBoard(){

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

}