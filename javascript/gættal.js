
'use strict'
/* Keeps all global variable.*/
let submitGuessDiv = $('submitGuessDiv');
let submitGuessButton = document.createElement("button");
submitGuessButton.setAttribute("class", "inputSend");
submitGuessButton.setAttribute("id", "submitgæt");
submitGuessButton.setAttribute("name", "gæt");
submitGuessButton.innerHTML = "Gæt Tal";
let randomNumberHolder = 0;
let isWinner = "false";
let done = "false";
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

    /* objects store two players*/
    Person = {
        name: "",
        randomNumber: 0,
        sumValues: 0,
        timeUsed: 0,
        isWinner: "false",
        done: "false"
    };

    Person2 = {
        name: "",
        randomNumber: 0,
        sumValues: 0,
        timeUsed: 0,
        isWinner: "false",
        done: "false"
    };
    
  /* newGame starts a game and sets the player */
    newGame(){
        /*if there is no submit button. */
        if (submitGuessDiv.firstChild !== 0) {
            submitGuessDiv.appendChild(submitGuessButton);   
        }
    clearInterval(time);
    person = [];
    let result = $('resultInput');
    let playersName = $('playerName');
    let timePlayed = $('timePlayed');
    let scoreValue = $('scoreValue');
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
    done = "false";
    sumvalues = 10;
    let player1 = this.Person;
    let player2 = this.Person2;
    /* first player */
        do{
            var howMany = Number(prompt('How many players?', 'max 2'));
        }while(howMany > 2 || howMany < 1)
    /* second player */
   do{
    var playerName = String(prompt('Players Name'));
   }while(playerName === "null" || playerName === "")
   
    player1.name = playerName;
    player1.randomNumber = this.generateRandomNumber();
    player1.sumValues = 10;
    player1.done = "false";
    player1.timeUsed = 0;
    scoreValue.innerHTML = player1.sumValues;
    /* pushing object to person arrary*/
    person.push(this.Person);
    console.log(person);
    playersName.innerHTML = "" + person[0].name;
   /*creating second player if howMany is equals 2.*/
    if (howMany === 2) {
        do{
            var playerNameSecond = String(prompt('Second players Name'));
        }while(playerNameSecond === "null" || playerNameSecond === "")
       
        player2.name = playerNameSecond;
        player2.randomNumber = this.generateRandomNumber();
        player2.sumValues = 10;
        player2.done = "false";
        player2.timeUsed = 0;
            /* pushing second object to person arrary*/
        person.push(this.Person2);
        }
        this.timer();
   
}



/* checkwinner checks how many players there are and who wins */
checkWinner(){
    console.log(isWinner);
    console.log(person[0]);
    console.log("check done " + person[0].isWinner);
    let result = $('resultInput');
    let timePlayed = $('timePlayed');
    clearInterval(time);    
    sec--
    /* sets zero in front of 9 in array */
    if (sec === 9) {
        c = "0";
        
    }
    /* sets player time used in a round. */
    if (person[0].done === "true" && person[0].timeUsed === 0) 
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
    if (person[1].done === "false") {
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
}else if (person[0].isWinner === "true" && person.length === 1) {
      /* display winner if there is only one player*/
      window.alert(person[0].name + " vinder spillet med tiden: " + person[0].timeUsed);
      this.confirmNewGame();
}else{
    window.alert("Computeren vinder!");
    this.confirmNewGame();
    
}



/* checks the winner of both players*/
if (person.length === 2) { 

if (person[0].done === "true" && person[1].done === "true") {
    /* checks if one of the two players guesses right*/
    if (person[0].isWinner === "true" && person[1].isWinner === "false") {
        /*first wins*/
        window.alert(person[0].name + " vinder spillet med tiden: " + person[0].timeUsed);
        this.confirmNewGame();
    }else if (person[1].isWinner === "true" && person[0].isWinner === "false") {
         /*second wins*/
         window.alert(person[1].name + " vinder spillet med tiden: " + person[1].timeUsed);
         this.confirmNewGame();
    }
    /* checks if both gussses right. Then it checks who did less træk */ 
    if (person[0].isWinner === "true" && person[1].isWinner === "true") {
        if (person[0].sumValues > person[1].sumValues) {
            /* first one wins*/
            window.alert(person[0].name + " vinder spillet med tiden: " + person[0].timeUsed);
            this.confirmNewGame();
        }else if (person[0].sumValues < person[1].sumValues) {
             /* second one wins*/
             window.alert(person[1].name + " vinder spillet med tiden: " + person[1].timeUsed);
             this.confirmNewGame();
        }
        
    }

   /* checks if both used the same træk and guesses. Winner is beeing tracked by time used.*/ 
    if (person[0].sumValues === person[1].sumValues && person[0].isWinner === "true" && person[1].isWinner === "true") {
        /* cheks if both træk and time is the same*/
        if (person[0].timeUsed === person[1].timeUsed) {
            window.alert("Uafgjort!");
            this.confirmNewGame();
        }else if (person[0].timeUsed < person[1].timeUsed) {
            window.alert(person[0].name + " vinder spillet med tiden: " + person[0].timeUsed);
            this.confirmNewGame();
        }else{
            window.alert(person[1].name + " vinder spillet med tiden med tiden: " + person[1].timeUsed);
            this.confirmNewGame();
        }
        
    }
    /* if no one wins the computer wins!*/
    if (person[0].sumValues === 0 && person[1].sumValues === 0) {
        window.alert("Computeren vinder!");
        this.confirmNewGame();
    }
    }
   
}

}

/* a function that checks the value of a player */
    checkValue(){
        let userValue = $('inputNumber').value -0;
        /* display the result */
        let result = $('resultInput');
        /* display the score */
        let scoreValue = $('scoreValue');
        /*checking if first player is done otherwise second players turn. */
        if(person[0].done === "false"){
            randomNumberHolder = person[0].randomNumber;
            person[0].sumValues = sumvalues;
            console.log(person[0]);
            console.log("player one in action");

        }else{
            randomNumberHolder = person[1].randomNumber;
            person[1].sumValues = sumvalues;
            console.log(person[1]);
            console.log("player second in action");

        }
    

/*checks the value of a giving number from the user */
    if(userValue === randomNumberHolder){
        /* there is a winner*/
        result.innerHTML = "Tillykke du gættede rigtigt ";
        scoreValue.innerHTML = " " + sumvalues;
        if (person[0].done === "false") {
              person[0].sumValues -= 1;  
              person[0].isWinner = "true";  
              person[0].done = "true";  
        }else{ 
                person[1].isWinner = "true";  
                person[1].done = "true";  
                person[1].sumValues -= 1;  
        }
          
        this.checkWinner();

    }else if (userValue < randomNumberHolder){
        /* the value is higher than the genereated number */
        result.innerHTML = "Tallet er højre ";
        sumvalues--;
        scoreValue.innerHTML = "" + sumvalues;


    }else{
        /* the value is less than the genereated number */
        result.innerHTML = "Tallet er lavere ";
        sumvalues--;
        scoreValue.innerHTML = "" + sumvalues;
  
    }
     /* the value is qeual 0 which means game over for the current user */
    if(sumvalues === 0){
        result.innerHTML = "Game over! Det rigtige resultat er:  " + randomNumberHolder;
        scoreValue.innerHTML = "" + sumvalues;
        if (person[0].done === "false") {
            person[0].done = "true";
            person[0].sumValues -= 1;  
      }else{

            person[1].done = "true";  
            person[1].sumValues -= 1;  

      }
      window.alert("Game over! Det rigtige resultat er: " + randomNumberHolder)
        this.checkWinner();
    }

}
generateRandomNumber(){
    return Math.floor(Math.random() * 1000 + 1);  
}
timer(){

    time = setInterval(function(){ 
        timePlayed.innerHTML = a + hours + ":" + b + min + ":" + c + sec;
         sec++
         if(sec === 10){
             c = "";
         }
         if(min === 10){
            b = "";
        }
        if(hours === 10){
            a = "";
        }
    
         if(sec === 59){
             sec = 0;
             c = "0";
             min++;
         }
         if(min === 59){
             min = 0;
             b = "0";
             hours++;
         }
    
    }, 1000);
}
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
function doSomething () {
    let buttonFormNewGame = $("newGame");
    const container = document.querySelector('#submitGuessDiv');
    let b = new GuessNumberGame();
    buttonFormNewGame.addEventListener('click', function(event){
        event.preventDefault()
        b.newGame();
      });
      container.addEventListener('click', function (event) {
        // But only alert for elements that have an alert-button class
        if (event.target.classList.contains('inputSend')) {
            event.preventDefault()
            b.checkValue();
        }
      });
   
}

window.addEventListener('load', doSomething);






