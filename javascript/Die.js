'use strict'

const dice              = [];
const rollDiceButton    = document.getElementById('rollDice');

function rollDie(sides) {
    return Math.floor(Math.random() * sides + 1);
}

class Die {

    constructor(dice, sides) {
        this.dice   = dice;
        this.sides  = sides;
        this.value  = 0;
    }

    roll() {
        //return this.value = Math.floor(Math.random() * this.sides + 1)
        return this.value = rollDie(this.sides);
    }

}

for (let i = 0; i < 6; i++) {

    let die = new Die(i, 6);
    //die.roll();
    dice.push(die);

    //if(die.roll() === 2)

    //console.log(`Dice ${i + 1}: ${die.roll()}`);
}

let getScore = 0;
let scores = [];

function rollDice() {
    scores = [];
    for (let die of dice) {
        die.roll();
        /*if (die.value === 2 || die.value === 5) {
            console.log(die.value);
            console.log('This roll had 2s or 5s');
        }
        else {
            console.log(die.value);
            console.log('This roll had no 2s or 5s');            
        }*/
        
        //console.log(die.value);
    }
    /*dice.forEach(element => {
        console.log(`Dice: ${element.value}`);
        scores.push(element.value);
        
    });*/
    for (let i = 0; i < dice.length; i++) {
        console.log(`Dice ${i + 1}: ${dice[i].value}`);
        scores.push(dice[i].value);
    }
    //console.log(scores.includes(2 || 5));

    if (scores.includes(2 || 5)) {
        getScore = getScore;
        console.log(`Includes 2's or 5's (No points)`);
    }
    else {
        for (let i = 0; i < dice.length; i++) {
            getScore = getScore + dice[i].value;
        }
        console.log(`Doesn't include 2's or 5's (Gives points)`);
    }
    console.log(scores);

    console.log(`Total Points: ${getScore}`);
    
    /*for (let i = 0; i < dice.length; i++) {
        console.log(`Dice ${i +1}: ${dice[i].value}`);
        if (dice[i].value === 2 || dice[i].value === 5) {
            //getScore = getScore - dice[i].value;
            console.log(`Don't count this`);
            

        }
        else {
            //getScore = dice[i].value + dice[i].value;
            //console.log(getScore);
            //getScore = getScore + dice[i].value;
            //console.log('test2')
                        
        }
        //getScore = getScore + dice[i].value;
        
    }
    console.log(`Total Score: ${getScore}`);
    
    /*dice.forEach(element => {
        console.log(`Rolled: ${element.value}`);
    });*/
    //console.log(dice);
    
}

rollDiceButton.addEventListener('click', rollDice);

//console.log(dice);