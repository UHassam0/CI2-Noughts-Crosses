

let box1 = document.getElementById('1');
let box2 = document.getElementById('2');
let box3 = document.getElementById('3');
let box4 = document.getElementById('4');
let box5 = document.getElementById('5');
let box6 = document.getElementById('6');
let box7 = document.getElementById('7');
let box8 = document.getElementById('8');
let box9 = document.getElementById('9');

box1.addEventListener('click', handleClick);
box2.addEventListener('click', handleClick);
box3.addEventListener('click', handleClick);
box4.addEventListener('click', handleClick);
box5.addEventListener('click', handleClick);
box6.addEventListener('click', handleClick);
box7.addEventListener('click', handleClick);
box8.addEventListener('click', handleClick);
box9.addEventListener('click', handleClick);

function handleClick(event) {
    if (event.target.innerHTML == '') {
    event.target.innerHTML = playerToken;
    empty = document.querySelectorAll('.grid-boxes:empty');
    }
    empty = document.querySelectorAll('.grid-boxes:empty');
    checkPlayerWin();
    compTurn();
    if (empty.length === 0) {
        alert('Game Over! Stalemate! Refresh the page to try again');
    }
}


let empty = document.querySelectorAll('.grid-boxes:empty');

function caseWin1() {
    if (
        box1.innerHTML === box2.innerHTML && box1.innerHTML === box3.innerHTML
        ||
        box1.innerHTML === box5.innerHTML && box1.innerHTML === box9.innerHTML
        ||
        box1.innerHTML === box4.innerHTML && box1.innerHTML === box7.innerHTML
    ) alert(`${box9.innerHTML} is the winner. Refresh the page`); 
}
function caseWin5() {
    if (
        box5.innerHTML === box3.innerHTML && box5.innerHTML === box7.innerHTML
        ||
        box5.innerHTML === box4.innerHTML && box1.innerHTML === box6.innerHTML
    ) alert(`${box5.innerHTML} is the winner. Refresh the page`);
}

function caseWin9() {
    if (
        box9.innerHTML === box8.innerHTML && box9.innerHTML === box7.innerHTML
        ||
        box9.innerHTML === box6.innerHTML && box9.innerHTML === box3.innerHTML
    ) alert(`${box1.innerHTML} is the winner. Refresh the page`); 
}

function checkPlayerWin() {

    if (empty.length < 5) {
       
        caseWin1()
        caseWin5()
        caseWin9() 
     }
}


function playerTurn() {  
    empty = document.querySelectorAll('.grid-boxes:empty'); 
    for (let i of empty) {
        if (empty.length > 0) {
    i.addEventListener('click', insertToken);
    function insertToken(event) {
        this.innerHTML = playerToken;
        this.className = 'doNotUse'
        checkPlayerWin();
        empty = document.querySelectorAll('.grid-boxes:empty');
        }}
        empty = document.querySelectorAll('.grid-boxes:empty');
    
    }
}

let compToken = 'O';
let playerToken = 'X';

function compTurn() {
    let compChoice = Math.floor(Math.random() * empty.length);
    if (empty.length > 0) {
    empty[compChoice].innerHTML = compToken;
    }
}



