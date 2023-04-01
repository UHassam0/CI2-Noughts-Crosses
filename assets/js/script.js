
// assign noughts and crosses tokens

let tokenSubmit = document.getElementById('submitButton');
tokenSubmit.addEventListener('click', assignPT);

function assignPT() {
    let form = document.forms.tokenForm;
    playerToken = form.querySelector('input[name=token]:checked').value;
    if (playerToken == 'O') {
        compToken = 'X';
    } else {
        compToken = 'O';
    }
    document.getElementsByClassName("grid-boxes").style.pointerEvents = "all";
}



// Assign game grid boxes to variables
let box1 = document.getElementById('1');
let box2 = document.getElementById('2');
let box3 = document.getElementById('3');
let box4 = document.getElementById('4');
let box5 = document.getElementById('5');
let box6 = document.getElementById('6');
let box7 = document.getElementById('7');
let box8 = document.getElementById('8');
let box9 = document.getElementById('9');

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
    ) document.getElementById('game-message').innerHTML = `${box1.innerHTML} is the winner. Refresh the page`;
}

function caseWin5() {
    if ((box5.innerHTML != '') &&
    (
        (box5.innerHTML === box3.innerHTML && box5.innerHTML === box7.innerHTML) ||
        (box5.innerHTML === box4.innerHTML && box5.innerHTML === box6.innerHTML)
    )
    ) document.getElementById('game-message').innerHTML = `${box5.innerHTML} is the winner. Refresh the page`;
}

function caseWin9() {
    if ((box9.innerHTML != '') &&
    (
        (box9.innerHTML === box8.innerHTML && box9.innerHTML === box7.innerHTML) ||
        (box9.innerHTML === box6.innerHTML && box9.innerHTML === box3.innerHTML)
    )
    ) document.getElementById('game-message').innerHTML = `${box9.innerHTML} is the winner. Refresh the page`;
}

function checkPlayerWin() {
    //checks for each win case
    if (empty.length < 5) { // trying to prevent return of blank winner

        caseWin1();
        caseWin5();
        caseWin9();
    }
}


function compTurn() {
    let compChoice = Math.floor(Math.random() * empty.length); // generate random number less than or equal to number of empty boxes
    if (empty.length > 0) {
        empty[compChoice].innerHTML = compToken; // input compToken to random choice as long as at least 1 empty box
    }
}

function handleClick(event) {
    // inputs playerToken if clicked box is not empty
    if (event.target.innerHTML != '') {
        
        }
    else {
        event.target.innerHTML = playerToken;
        empty = document.querySelectorAll('.grid-boxes:empty');
        checkPlayerWin();
        compTurn();
        if (empty.length === 0) {
            document.getElementById('game-message').innerHTML = 'Game Over! Stalemate! Refresh the page to try again!';
        }
        checkPlayerWin();
    }
}
