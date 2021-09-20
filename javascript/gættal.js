
/* this function starts a game */
let randomNumber = 0;
let sumvalues = 0;
let person = [];
let time = 0;
let hours = 0;
let min =  0;
let sec =  0;
let a = "0";
let b = "0";
let c = "0";
let test = 0;
let quessWin = 0;
  
class Game{

    Person = {
        name: "",
        randomNumber: 0,
        sumValues: 0,
        timeUsed: 0,
        guessWin: 0
    };

    Person2 = {
        name: "",
        randomNumber: 0,
        sumvalues: 0,
        timeUsed: 0,
        guessWin: 0
    };
    
  
    newGame(){
    person = [];
    let playersName = $('playerName');
    let timePlayed = $('timePlayed');
    let scoreValue = $('scoreValue');
    // playerName.innerHTML = " ";
    // timePlayed.innerHTML = " ";
    // scoreValue.innerHTML = " ";
    time = 0;
    sec = 0;
    min = 0;
    hours = 0;
    let player1 = this.Person;
    let player2 = this.Person2;
        do{
            var howMany = Number(prompt('How many players?', 'max 2'));
        }while(howMany > 2 || howMany < 1)
   
    var playerName = String(prompt('Players Name'));
    player1.name = playerName;
    player1.randomNumber = this.generateRandomNumber();
    player1.sumValues = 10;
    player1.timeUsed = 0;
    person.push(this.Person);
    console.log(person);
    playersName.innerHTML = "" + person[0].name;


    if (howMany === 2) {
        var playerNameSecond = String(prompt('Second players Name'));
        player2.name = playerNameSecond;
        player2.randomNumber = this.generateRandomNumber();
        player2.sumValues = 10;
        player2.timeUsed = 0;
        person.push(this.Person2);
        }
 

   
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
checkWinner(){
    person[0].guessWin = quessWin;
    clearInterval(time);
    sec--
    person[0].timeUsed =  a + hours + ":" + b + min + ":" + c + sec;
    /* check if there is a second player*/
if (person.length > 1) {
    window.alert(person[1].name + " Turn!");

/*check winner of game by træk and time. if only one player display winner*/
    
}else if (person[0].guessWin === 1) {
      /* display winner if there is only one player*/
      window.alert(person[0].name + " vinder spillet med tiden: " + person[0].timeUsed);
}else{
    window.alert("Computer wins!");
    if (confirm('Vil du spille et nyt spil?')) {
        this.newGame();
      } else {
        
        /*button should be removed */
      }

}




}

/* a function that checks the value of a player */
    checkValue(){
        if(person[0].sumValues > 0){
            person[0].randomNumber = randomNumber;
            person[0].sumValues = sumvalues;
            person[0].quessWin = quessWin;
            console.log("player one in action");

        }else{
            person[1].randomNumber = randomNumber;
            person[1].sumValues = sumvalues;
            person[1].quessWin = quessWin;
            console.log("player seconds in action");

        }
   
    
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
        quessWin ++;
        this.checkWinner();

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
        result.innerHTML = "Game over! Det rigtige resultat er:  " + randomNumber;
        this.checkWinner();
    }

}
generateRandomNumber(){
    return Math.floor(Math.random() * 1000 + 1);  
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
