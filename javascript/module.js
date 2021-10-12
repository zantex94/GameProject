'use strict'


export function generateRandomNumber(){
    return Math.floor(Math.random() * 1000 + 1);
}
export function $(bar) { return document.getElementById(bar); };

export function timer(){
let time = 0;
let sec = 0;
let min = 0;
let hours = 0;
let a = "0";
let b = "0";
let c = "0";

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

