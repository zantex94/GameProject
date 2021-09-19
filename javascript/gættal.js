
/* this function starts a game */
let randomNumber = 0;
let sumvalues = 10;
let person = [];
let playerTurn = 0;
let time = 0;
let hours = 0;
let min =  0;
let sec =  0;
let a = "0";
let b = "0";
let c = "0";
  
class Game{


    Person = {
        name: "",
        randomNumber: 0,
        sumvalues: 0,
        // date = 0
    };
    
  
    newGame(){
    randomNumber = Math.floor(Math.random() * 1000 + 1);  
    // var howMany = Number(prompt('How many players?'));
    var playerName = String(prompt('Players Name'));
    this.Person.name = playerName;
    let playersName = $('playerName');
    let timePlayed = $('timePlayed');
    playersName.innerHTML = "" + this.Person.name;
    this.Person.sumvalues = 10;
   
 time =  setInterval(function(){ 
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

/* a function that checks the value of a player */
    checkValue(){
     let userValue = $('inputNumber').value -0;
     /* display the result */
     let result = $('resultInput');
     /* display the score */
     let scoreValue = $('scoreValue');
    /* display time */
     let timePlayed = $('timePlayed');

    

/* The if statement checks the value of a giving number from the user */
    if(userValue === randomNumber){
        /* there is a winnder*/
        result.innerHTML = "Tillykke du gættede rigtigt ";
        scoreValue.innerHTML = " " + sumvalues;
        clearInterval(time);
        console.log(timePlayed.innerHTML);

    }else if (userValue < randomNumber){
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
    if(sumvalues === 0){
        result.innerHTML = "Game over! Det rigtige result   at er:  " + randomNumber;
        clearInterval(time);
        console.log(timePlayed.innerHTML);
    }

}
}


function doSomething () {
    let buttonFormNewGame = $("newGame");
    let buttonFormSubmit = $("submitgæt");
    let b = new Game();
    buttonFormNewGame.addEventListener('click', function(event){
        event.preventDefault()
        b.newGame();
      });
      buttonFormSubmit.addEventListener('click', function(event){
        event.preventDefault()
        b.checkValue();
      });
}
window.addEventListener('load', doSomething);
