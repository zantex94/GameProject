// import {$, generateNumber} from './module.js';
import * as moduleFunctions from './module.js';
import {Player} from './player.js';
// https://javascript.info/import-export
'use strict'
/* global variable.*/
let submitGuessDiv = moduleFunctions.$('submitGuessDiv');
let submitGuessButton = document.createElement("button");
submitGuessButton.setAttribute("class", "inputSend");
submitGuessButton.setAttribute("id", "submitgæt");
submitGuessButton.setAttribute("name", "gæt");
submitGuessButton.innerHTML = "Gæt Tal";
let randomNumberHolder = 0;
let sumvalues = 10;
let person = [];
let time = 0;
let hours = 0;
let min =  0;
let sec =  0;
let a = "0";
let b = "0";
let c = "0";

  /**************Guess number game**************************/
class GuessNumberGame{
    
  /******************* newGame starts a game and sets the player **************************************/
    newGame(){
        /*if there is no submit button. */
        if (submitGuessDiv.firstChild !== 0) {
            submitGuessDiv.appendChild(submitGuessButton);   
        }
    clearInterval(time);
    person = [];
    let result = moduleFunctions.$('resultInput');
    let playersName = moduleFunctions.$('playerName');
    let timePlayed = moduleFunctions.$('timePlayed');
    let scoreValue = moduleFunctions.$('scoreValue');
    result.innerHTML = "";
    playersName.innerHTML = "";
    timePlayed.innerHTML = "";
    scoreValue.innerHTML = "";
    time = 0;
    sec = 0;
    min = 0;
    hours = 0;
     a = "0";
     b = "0";
     c = "0";
    sumvalues = 10;
    /* first player */
        do{
            var howMany = Number(prompt('How many players?', 'max 2'));
        }while(howMany > 2 || howMany < 1 || !/^[0-9]+$/.test(howMany));
    /* second player */
   do{
    var playerName = String(prompt('Players Name'));
   }while(playerName === "null" || playerName === "")
   /*use the player class to construct a player */
   let person1 = new Player(playerName,moduleFunctions.generateRandomNumber(),10,0,false,false);
   console.log(person1);
       /* pushing first player to person arrary*/
    person.push(person1);
    scoreValue.innerHTML = person[0].sumValues;
    playersName.innerHTML = "" + person[0].name;
   /*creating second player if howMany is equals 2.*/
    if (howMany === 2) {
        do{
            var playerNameSecond = String(prompt('Second players Name'));
        }while(playerNameSecond === "null" || playerNameSecond === "")
           /*use the player class to construct a player */
        let person2 = new Player(playerNameSecond,moduleFunctions.generateRandomNumber(),10,0,false,false);
            /* pushing second player to person arrary*/
            person.push(person2);
        }
        this.timer();
       
   
}



/*************************checkwinner checks how many players there are and who wins ***********************************/ 
checkWinner(){
    let result = moduleFunctions.$('resultInput');
    let timePlayed = moduleFunctions.$('timePlayed');
    /* stop the timer */
    clearInterval(time);    
    sec--
    /* sets zero in front of 9 so that it display 09 in arrays, otherwise it would be just 9 */
    if (sec === 9) {
        c = "0";
        
    }
    /* sets player time used in a round. */
    if (person[0].done === true && person[0].timeUsed === 0) 
    {
        person[0].timeUsed =  a + hours + ":" + b + min + ":" + c + sec;
        console.log("first finisher");
        console.log(person[0]);
        
    }else{
        person[1].timeUsed =  a + hours + ":" + b + min + ":" + c + sec;
        console.log("second finisher");
        console.log(person[1]);
    }
  

    /* check if there is a second player*/
if (person.length > 1) {
    if (person[1].done === false) {
        window.alert(person[1].name + " tur!");
        playerName.innerHTML = person[1].name;
        scoreValue.innerHTML = person[1].sumValues;
        result.innerHTML = "";
        sec = 0;
        a = "0";
        b = "0";
        c = "0";
        min = 0;
        hours = 0;
        sumvalues = 10;
        timePlayed.innerHTML = "";
        this.timer();
    }

/*check winner of game by træk and time. if only one player display winner*/
}else if (person[0].guessright === true && person.length === 1) {
      /* display winner if there is only one player*/
      window.alert(person[0].name + " vinder spillet med tiden: " + person[0].timeUsed);
      this.confirmNewGame();
      localStorage.setItem("player",JSON.stringify(person[0]));

}else{
    window.alert("Computeren vinder!");
    this.confirmNewGame();
    localStorage.setItem("player",JSON.stringify(person[0]));
    
}



/* checks the winner of both players*/
if (person.length === 2) { 

if (person[0].done === true && person[1].done === true) {
    /* checks if one of the two players guesses right*/
    if (person[0].guessright === true && person[1].guessright === false) {
        /*first wins*/
        window.alert(person[0].name + " vinder spillet med tiden: " + person[0].timeUsed);
        this.confirmNewGame();
        localStorage.setItem("player",JSON.stringify(person[0]));
    }else if (person[1].guessright === true && person[0].guessright === false) {
         /*second wins*/
         window.alert(person[1].name + " vinder spillet med tiden: " + person[1].timeUsed);
         this.confirmNewGame();
         localStorage.setItem("player",JSON.stringify(person[1]));
    }
    /* checks if both gussses right. Then it checks who did less træk */ 
    if (person[0].guessright === true && person[1].guessright === true) {
        if (person[0].sumValues > person[1].sumValues) {
            /* first one wins*/
            window.alert(person[0].name + " vinder spillet med tiden: " + person[0].timeUsed);
            this.confirmNewGame();
            localStorage.setItem("player",JSON.stringify(person[0]));
        }else if (person[0].sumValues < person[1].sumValues) {
             /* second one wins*/
             window.alert(person[1].name + " vinder spillet med tiden: " + person[1].timeUsed);
             this.confirmNewGame();
             localStorage.setItem("player",JSON.stringify(person[1]));
        }
        
    }

   /* checks if both used the same træk and guesses. Winner is beeing tracked by time used.*/ 
    if (person[0].sumValues === person[1].sumValues && person[0].guessright === true && person[1].guessright === true) {
        /* cheks if both træk and time is the same*/
        if (person[0].timeUsed === person[1].timeUsed) {
            window.alert("Uafgjort!");
            this.confirmNewGame();
            localStorage.setItem("player",JSON.stringify(person[0]));
            localStorage.setItem("player",JSON.stringify(person[1]));
        }else if (person[0].timeUsed < person[1].timeUsed) {
            window.alert(person[0].name + " vinder spillet med tiden: " + person[0].timeUsed);
            this.confirmNewGame();
            localStorage.setItem("player",JSON.stringify(person[0]));
        }else{
            window.alert(person[1].name + " vinder spillet med tiden med tiden: " + person[1].timeUsed);
            this.confirmNewGame();
            localStorage.setItem("player",JSON.stringify(person[1]));
        }
        
    }
    /* if no one wins the computer wins!*/
    if (person[0].sumValues === 0 && person[1].sumValues === 0) {
        window.alert("Computeren vinder!");
        this.confirmNewGame();
        localStorage.setItem("player",JSON.stringify(person[0]));
        localStorage.setItem("player",JSON.stringify(person[1]));
    }
    }
   
}

}

/* a function that checks the value of a player */
    checkValue(){
        let userValue = moduleFunctions.$('inputNumber').value -0;
        /* display the result */
        let result = moduleFunctions.$('resultInput');
        /* display the score */
        let scoreValue = moduleFunctions.$('scoreValue');
        /*checking if first player is done otherwise second players turn. */
        if(person[0].done === false){
            randomNumberHolder = person[0].randomNumber;
            person[0].sumValues = sumvalues;
            console.log(person[0]);

        }else{
            randomNumberHolder = person[1].randomNumber;
            person[1].sumValues = sumvalues;
            console.log(person[1]);

        }
    

/*checks the value of a giving number from the user */
    if(userValue === randomNumberHolder){
        /* there is a winner*/
        result.innerHTML = "Tillykke du gættede rigtigt ";
        scoreValue.innerHTML = " " + sumvalues;
        if (person[0].done === false) {
              person[0].guessright = true;  
              person[0].done = true;  
        }else{ 
                person[1].guessright = true;  
                person[1].done = true;  
        }
          
        this.checkWinner();

    }else if (userValue < randomNumberHolder){
        /* the value is higher than the genereated number */
        result.innerHTML = "";
        result.innerHTML = "Tallet er højre ";
        sumvalues--;
        scoreValue.innerHTML = "" + sumvalues;


    }else{
        /* the value is less than the genereated number */
        result.innerHTML = "";
        result.innerHTML = "Tallet er lavere ";
        sumvalues--;
        scoreValue.innerHTML = "" + sumvalues;
  
    }
     /* the value is qeual 0 which means game over for the current user */
    if(sumvalues === 0){
        result.innerHTML = "Game over! Det rigtige resultat er:  " + randomNumberHolder;
        scoreValue.innerHTML = "" + sumvalues;
        if (person[0].done === false) {
            person[0].done = true;
            person[0].sumValues -= 1;  
      }else{

            person[1].done = true;  
            person[1].sumValues -= 1;  

      }
      window.alert("Game over! Det rigtige resultat er: " + randomNumberHolder);
        this.checkWinner();
    }

}

// timer(){

//     time = setInterval(function(){ 
//         timePlayed.innerHTML = a + hours + ":" + b + min + ":" + c + sec;
//          sec++
//          if(sec === 10){
//              c = "";
//          }
//          if(min === 10){
//             b = "";
//         }
//         if(hours === 10){
//             a = "";
//         }
    
//          if(sec === 59){
//              sec = 0;
//              c = "0";
//              min++;
//          }
//          if(min === 59){
//              min = 0;
//              b = "0";
//              hours++;
//          }
    
//     }, 1000);
// }
confirmNewGame(){
    if (confirm('Vil du spille et nyt spil?')) {
        this.newGame();
      } else {
                /*button should be removed */
        submitGuessDiv.removeChild(submitGuessButton);
  
      }
}
}

/* connection from button to GuessNumberGame */
export function doEvent () {
    const container = document.querySelector('#submitGuessDiv');
    const container2 = document.querySelector('#inputNumber');
    let buttonFormNewGame = moduleFunctions.$("newGame");
    let b = new GuessNumberGame();
    container.addEventListener('click', function (event) {
        if (event.target.classList.contains('inputSend')) {
            event.preventDefault();
            container2.focus();
            b.checkValue();
        }
      });
      container2.addEventListener('keydown', function (ev) {
        if (ev.keyCode === 13) {
            // moduleFunctions.$('submitgæt').click();
            b.checkValue();
        }     
    });

    buttonFormNewGame.addEventListener('click', function(event){
        event.preventDefault();
        container2.focus();
        b.newGame();
      });
   
}
