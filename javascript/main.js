'use strict'
const $ = function (bar) { return document.getElementById(bar); };
function createHeader(){
let head = $('navigationHeader');
head.setAttribute("class", "navigationBar");
let l1 = document.createElement("li");
let a1 = document.createElement("a");
let l2 = document.createElement("li");
let a2 = document.createElement("a");
let l3 = document.createElement("li");
let a3 = document.createElement("a");
let l4 = document.createElement("li");
let a4 = document.createElement("a");
let l5 = document.createElement("li");
let a5 = document.createElement("a");

l5.setAttribute("class", "navigationList");
a5.setAttribute("class", "navigationText");
a5.setAttribute("href", "index.html");
a5.innerHTML = "Forside";
l5.appendChild(a5);


l1.setAttribute("class", "navigationList");
a1.setAttribute("class", "navigationText");
a1.setAttribute("href", "barroev.html");
a1.innerHTML = "Barroev";


l1.appendChild(a1);

l2.setAttribute("class", "navigationList");
a2.setAttribute("class", "navigationText");
a2.setAttribute("href", "goettal.html");
a2.innerHTML = "goettal";
l2.appendChild(a2);

l3.setAttribute("class", "navigationList");
a3.setAttribute("class", "navigationText");
a3.setAttribute("href", "hangman.html");
a3.innerHTML = "hangman";
l3.appendChild(a3);

l4.setAttribute("class", "navigationList");
a4.setAttribute("class", "navigationText");
a4.setAttribute("href", "vendespil.html");
a4.innerHTML = "Vendespil";
l4.appendChild(a4);

head.appendChild(l5);
head.appendChild(l1);
head.appendChild(l2);
head.appendChild(l3);
head.appendChild(l4);


}

window.addEventListener("onload", createHeader());
