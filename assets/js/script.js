// assign noughts and crosses tokens

let winner;
let playerToken;
let compToken;

document.getElementById('modal').showModal();

const tokenSubmit = document.getElementById('submitButton');
tokenSubmit.addEventListener('click', assignPT);

function assignPT() {
    const form = document.forms.tokenForm;
    playerToken = form.querySelector('input[name=token]:checked').value;
    if (playerToken == 'O') {
        compToken = 'X';
    } else {
        compToken = 'O';
    }

    // allows boxes to be clicked
    const gridBoxes = document.getElementsByClassName("grid-boxes");

    for (let i = 0; i < 9; i++) {
        gridBoxes[i].style.pointerEvents = "all";
    }

    document.getElementById('token-selected').innerHTML = `You have chosen to play as ${playerToken}`;
}

// Assign game grid boxes to variables
const box1 = document.getElementById('1');
const box2 = document.getElementById('2');
const box3 = document.getElementById('3');
const box4 = document.getElementById('4');
const box5 = document.getElementById('5');
const box6 = document.getElementById('6');
const box7 = document.getElementById('7');
const box8 = document.getElementById('8');
const box9 = document.getElementById('9');

// Add event listeners to game grid boxes
box1.addEventListener('click', handleClick);
box2.addEventListener('click', handleClick);
box3.addEventListener('click', handleClick);
box4.addEventListener('click', handleClick);
box5.addEventListener('click', handleClick);
box6.addEventListener('click', handleClick);
box7.addEventListener('click', handleClick);
box8.addEventListener('click', handleClick);
box9.addEventListener('click', handleClick);

let empty = document.querySelectorAll('.grid-boxes:empty');

function caseWin1() {
    if ((box1.innerHTML != '') &&
        (
            (box1.innerHTML === box2.innerHTML && box1.innerHTML === box3.innerHTML) ||
            (box1.innerHTML === box5.innerHTML && box1.innerHTML === box9.innerHTML) ||
            (box1.innerHTML === box4.innerHTML && box1.innerHTML === box7.innerHTML)
        )
    ) {
        if (box1.innerHTML == compToken) {
            winner = 'Computer is';
        } else {
            winner = 'You are';
        }
        document.getElementById('game-message').innerHTML = `${winner} the winner. Select New Game below!`;
        let gridBoxes = document.getElementsByClassName("grid-boxes");

        for (let i = 0; i < 9; i++) {
            gridBoxes[i].style.pointerEvents = "none";
        }
    }
}

function caseWin5() {
    if ((box5.innerHTML != '') &&
        (
            (box5.innerHTML === box3.innerHTML && box5.innerHTML === box7.innerHTML) ||
            (box5.innerHTML === box4.innerHTML && box5.innerHTML === box6.innerHTML) ||
            (box5.innerHTML === box2.innerHTML && box5.innerHTML === box8.innerHTML)
        )
    ) {
        if (box5.innerHTML == compToken) {
            winner = 'Computer is';
        } else {
            winner = 'You are';
        }
        document.getElementById('game-message').innerHTML = `${winner} the winner. Select New Game below!`;
        let gridBoxes = document.getElementsByClassName("grid-boxes");

        for (let i = 0; i < 9; i++) {
            gridBoxes[i].style.pointerEvents = "none";
        }
    }
}

function caseWin9() {
    if ((box9.innerHTML != '') &&
        (
            (box9.innerHTML === box8.innerHTML && box9.innerHTML === box7.innerHTML) ||
            (box9.innerHTML === box6.innerHTML && box9.innerHTML === box3.innerHTML)
        )
    ) {
        if (box9.innerHTML == compToken) {
            winner = 'Computer is';
        } else {
            winner = 'You are';
        }
        document.getElementById('game-message').innerHTML = `${winner} the winner. Select New Game below!`;
        let gridBoxes = document.getElementsByClassName("grid-boxes");

        for (let i = 0; i < 9; i++) {
            gridBoxes[i].style.pointerEvents = "none";
        }
    }
}

function checkPlayerWin() {
    //checks for each win case
    if (empty.length < 5) {
        // trying to prevent return of blank winner - may no longer be necessary But there is no way
        // for there to be a winner until at least 5 moves have been played 
        caseWin1();
        caseWin5();
        caseWin9();
    }
}

function compTurn() {
    let compChoice = Math.floor(Math.random() * empty.length);
    // generate random number less than or equal to number of empty boxes
    if (empty.length > 0) {
        // input compToken to random choice as long as at least 1 empty box
        empty[compChoice].innerHTML = compToken;
    }
}

function handleClick(event) {
    // inputs playerToken if clicked box is not empty
    if (event.target.innerHTML != '') {

    } else {
        event.target.innerHTML = playerToken;
        empty = document.querySelectorAll('.grid-boxes:empty');
        checkPlayerWin();
        if (document.getElementById('game-message').innerHTML == '') {
            compTurn();
        }
        if (empty.length === 0) {
            document.getElementById('game-message').innerHTML = 'Game Over! Stalemate! Select New Game below!';
        }
        checkPlayerWin();
    }
}

// resets game board - also do i need to /should i add function to select token again??

function resetBoard() {
    let gridBoxes = document.getElementsByClassName("grid-boxes");

    for (let i = 0; i < 9; i++) {
        gridBoxes[i].innerHTML = '';
        // gridBoxes[i].style.pointerEvents = "all";
    }

    document.getElementById('game-message').innerHTML = '';
    document.getElementById('modal').showModal();

}

let newGame = document.getElementById('new-game');
newGame.addEventListener('click', resetBoard);

