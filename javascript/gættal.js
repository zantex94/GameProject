var randomNumber = Math.floor(Math.random() * 1000 + 1);
/* this function starts a game */
function newGame(){
   
    let date = new Date()
    var howMany = Number(prompt('How many players?'));
    var playerName = String(prompt('Players Name'));
    
    console.log(howMany);
    console.log(playerName);
  
}
/* a function that checks the value of a player */
function checkValue(){
    console.log("Check value: " + randomNumber);
    let userValue = $('inputNumber').value;
    let result = $('resultInput');
    let scoreValue = $('scoreValue');
    let timePlayed = $('timePlayed');
    console.log("random number is: " + randomNumber);
    console.log("uservalue is: " + userValue);
    let sumvalues = 10;

    console.log(sumvalues);

    if(sumvalues === 0){
        result.innerHTML = "øv du fik ikke gættet rigtigt. Det endelige resultat er:  " + randomNumber;

    }


/* The if statement checks the value of a giving number from the user */
    if(userValue === randomNumber){
        /* there is a winnder*/
        result.innerHTML = "Tillykke du gættede rigtigt ";

    }else if (userValue < randomNumber){
        /* the value is higher than the genereated number */
        result.innerHTML = "Tallet er højre end ";
        sumvalues -= sumvalues;


    }else{
        /* the value is less than the genereated number */
        result.innerHTML = "Tallet er lavere end ";
        sumvalues -= sumvalues;
  
    }

}


function doSomething () {
    let buttonFormNewGame = $("newGame");
    let buttonFormSubmit = $("submitgæt");
    buttonFormNewGame.addEventListener('click', function(event){
        event.preventDefault()
        newGame();
      });
      buttonFormSubmit.addEventListener('click', function(event){
        event.preventDefault()
        checkValue();
      });
}
window.addEventListener('load', doSomething);
