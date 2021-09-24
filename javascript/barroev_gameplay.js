'use strict'




// Variables
const dice              = [];
//const rollDiceButton    = document.getElementById('rollDice');
let score               = 0;
let roll                = [];
let rollBtn           = document.createElement('button');




// Roll die
function rollDie(sides) {
    return Math.floor(Math.random() * sides + 1);
}




// Die class object
class Die {

    constructor(dice, sides) {
        this.dice   = dice;
        this.sides  = sides;
        this.value  = 0;
    }

    // Roll method
    roll() {
        return this.value = rollDie(this.sides);
    }

}




// Create selected amount of dice
for (let i = 0; i < 6 /* replace with selected amount of dice */; i++) {

    let die = new Die(i, 6);
    dice.push(die);

}




// Roll dice
function rollDice() {

    // Empty past roll saved values
    roll = [];
    diceContainer.innerHTML = '';

    // Roll the dice
    for (let die of dice) {
        die.roll();
    }
    
    // Save each rolled die value
    for (let i = 0; i < dice.length; i++) {
        console.log(`Dice ${i + 1}: ${dice[i].value}`);
        roll.push(dice[i].value);
        let dices    = document.createElement('div');
        dices.setAttribute('class', 'dice');
        dices.innerHTML = dice[i].value;
        diceContainer.append(dices);
    }

    // Check if the roll contained 2's or 5's
    if (roll.includes(2 || 5)) {
        score = score;
        console.log(`Includes 2's or 5's (No points)`);
    }
    else {
        for (let i = 0; i < dice.length; i++) {
            score = score + dice[i].value;
        }
        console.log(`Doesn't include 2's or 5's (Gives points)`);
    }

    console.log(roll);
    console.log(`Total Points: ${score}`);    
    
}



rollBtn.addEventListener('click', rollDice);