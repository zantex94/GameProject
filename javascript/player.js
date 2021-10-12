'use strict'

export class Player{
    /**construct a player */
    constructor(name, randomNumber, sumValues, timeUsed, guessright, done){
        this.name = name;
        this.randomNumber = randomNumber;
        this.sumValues = sumValues;
        this.timeUsed = timeUsed;
        this.guessright = guessright;
        this.done = done;
    }

}