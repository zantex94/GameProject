import {doEvent} from './goettal.js';
import {$} from './module.js';
'use strict'

function createHeader(){
let head = $('navigationHeader');
head.setAttribute("class", "navigationBar");
let l1 = document.createElement("li");
let a1 = document.createElement("a");
let l2 = document.createElement("li");
let a2 = document.createElement("a");
let l5 = document.createElement("li");
let a5 = document.createElement("a");

l5.setAttribute("class", "navigationList");
a5.setAttribute("class", "navigationText");
a5.setAttribute("href", "index.html");
a5.innerHTML = "Forside";
l5.appendChild(a5);


l1.setAttribute("class", "navigationList");
a1.setAttribute("class", "navigationText");
a1.setAttribute("href", "barreov.html");
a1.innerHTML = "Barroev";
l1.appendChild(a1);

l2.setAttribute("class", "navigationList");
a2.setAttribute("class", "navigationText");
a2.setAttribute("href", "goettal.html");
a2.innerHTML = "goettal";
l2.appendChild(a2);


head.appendChild(l5);
head.appendChild(l1);
head.appendChild(l2);

}
function init(){
    createHeader();
    doEvent();
}

window.addEventListener("load", init);
