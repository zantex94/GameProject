'use strict'
function isLocalStorageEnabled(){
    let foo = 'bar';
    try {
        localStorage.setItem(foo, foo);
        localStorage.removeItem(foo);
        return true;
    } catch(e) {
        return false;
    }
}
if (isLocalStorageEnabled()) {
    localStorage.removeItem('foo');
    let winner = {
        name: "",
        randomNumber: 0,
        sumValues: 0,
        timeUsed: 0,
        isWinner: "",
        done: ""
    };
    let foo = JSON.stringify(winner);
    localStorage.setItem('foo', foo);
} else {
    console.log('You must allow local storage in your browser');
}
if (isLocalStorageEnabled()) {
    let foo = localStorage.getItem('foo');
    foo = JSON.parse(foo);
    console.log(`foo.name = ${foo.name}\nfoo.randomNumber = ${foo.randomNumber}\nfoo.sumValues = ${foo.sumValues}\nfoo.timeUsed = ${foo.timeUsed}\nfoo.isWinner = ${foo.isWinner}\nfoo.done = ${foo.isWinner}`);
} else {
    console.log('You must allow local storage in your browser');
}