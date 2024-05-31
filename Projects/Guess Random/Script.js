let Random = parseInt((Math.random() * 100)+1);
//console.log(Random);

const inputGuess  = document.querySelector('#guess');
const submit = document.querySelector('#submit');
const guessSlot = document.querySelector('#PreviousGuess');
const remaining = document.querySelector('#TotalGuess');
const gameover = document.querySelector('.messagebox');
const resultmessage = document.querySelector('#box');


const p = document.createElement('p');

let prevGuess = [];
let numGuess = 0;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(inputGuess.value);
   // console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 5) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${Random}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === Random) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < Random) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > Random) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  inputGuess.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${5 - numGuess} `;
}

function displayMessage(message) {
    resultmessage.innerHTML = message;
}

function endGame() {
  inputGuess.value = '';
  inputGuess.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  gameover.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    Random = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 0;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${5 - numGuess} `;
    inputGuess.removeAttribute('disabled');
    if(gameover.contains(p)) { // Check if p is a child of resultmessage before removing it
        gameover.removeChild(p);
    }
    playGame = true;
  });
}

    
    
    









