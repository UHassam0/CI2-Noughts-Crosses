

let box1 = document.getElementById('1').innerHTML;
let box2 = document.getElementById('2').innerHTML;
let box3 = document.getElementById('3').innerHTML;
let box4 = document.getElementById('4').innerHTML;
let box5 = document.getElementById('5').innerHTML;
let box6 = document.getElementById('6').innerHTML;
let box7 = document.getElementById('7').innerHTML;
let box8 = document.getElementById('8').innerHTML;
let box9 = document.getElementById('9').innerHTML;

let empty = document.querySelectorAll('.grid-boxes:empty');

function caseWin1() {
    if (
        box1 === box2 && box1 === box3
        ||
        box1 === box5 && box1 === box9
        ||
        box1 === box4 && box1 === box7
    );
}
function caseWin5() {
    if (
        box5 === box3 && box5 === box7
        ||
        box5 === box4 && box1 === box6
    );
}

function caseWin9() {
    if (
        box9 === box8 && box9 === box7
        ||
        box9 === box6 && box9 === box3
    ); 
}

function checkPlayerWin() {

    if (caseWin1()) {
        alert(`${box1} is the winner`);
     }
    else if (caseWin5()) {
        alert(`${box5} is the winner`);
     }
     else if (caseWin9()) {
        alert(`${box1} is the winner`);
     }
     else compTurn();
}


function playerTurn() {   
    for (let i of empty) {
    i.addEventListener('click', insertToken);
    function insertToken(event) {
        this.innerHTML = playerToken;
        checkPlayerWin();
        let empty = document.querySelectorAll('.grid-boxes:empty');
        }


    }

}

let compToken = 'O';
let playerToken = 'X';

function compTurn() {
    let compChoice = Math.floor(Math.random() * empty.length);
    empty[compChoice].innerHTML = compToken;
}


playerTurn();
