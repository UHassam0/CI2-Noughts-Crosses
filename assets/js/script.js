//document.onload = alert('Are you ready to play?');


let box1 = document.getElementById('1');
let box2 = document.getElementById('2');
let box3 = document.getElementById('3');
let box4 = document.getElementById('4');
let box5 = document.getElementById('5');
let box6 = document.getElementById('6');
let box7 = document.getElementById('7');
let box8 = document.getElementById('8');
let box9 = document.getElementById('9');

let grid = document.getElementsByClassName('grid-boxes');
//let boxNumber = grid[i]

function insertNought(event) {
    let box1 = document.getElementById('1');
    box1.innerHTML = 'O'
}

box1.addEventListener('click', insertNought)



