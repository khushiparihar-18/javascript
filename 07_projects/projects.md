# Projects Related to DOM


## project link
[Click here](https://stackblitz.com/edit/stackblitz-starters-h7cm9vbw?description=HTML/CSS/JS%20Starter&file=script.js,styles.css,page2.html&terminalHeight=10&title=Static%20Starter)

# Solution Code

## project 1 Solution Code

``` javascript
console.log("Khushi")

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    switch (e.target.id) {
      case 'grey':
      case 'white':
      case 'pink':
      case 'skyblue':
      case 'red':
      case 'orange':
      case 'purple':
      case 'blue':
      case 'yellow':
      case 'black':
      case 'brown':
      case 'green':
        body.style.backgroundColor = e.target.id;
        break;
      default:
        console.log('No matching color');
    }
  });
});

```

## project 2 Solution Code

```javascript 
const form = document.querySelector('form');

// This UseCase will Give us Empty Value
// const height = pareseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('.results');
  if (height <= 0 || isNaN(height)) {
    results.innerHTML = 'Please Give a Valid Height';
  } else if (weight <= 0 || isNaN(weight)) {
    results.innerHTML = 'Please Give a Valid Weight';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    var message = '';
    if (bmi < 18.6) {
      message = 'underweight';
    } else if (bmi >= 18.6 && bmi < 24.9) {
      message = 'Normal Range';
    } else if (bmi >= 24.9) {
      message = 'OverWeight';
    }
    // show the result
    results.innerHTML = `<span>${bmi} ${message}</span>`;
  }
});

```

## project 3 Solution Code

```javascript
// const clock = document.querySelector('#clock')
const clock = document.getElementById('clock');
const d = document.getElementById('date');

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

let date = new Date();
d.innerHTML = date.toLocaleDateString();

```

## project 4 Solution Code

```javascript
let randomNumber = Math.floor(Math.random() * 100 + 1);

const userSubmit = document.getElementById('submt');
const userInput = document.getElementById('guessField');
const userGuesses = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHigh');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numberOfGuesses = 1;

let playGame = true;

if (playGame) {
  userSubmit.addEventListener('click', function (e) {
    e.preventDefault();
    const guessedNumber = parseInt(userInput.value);
    console.log(guessedNumber);
    validateGuess(guessedNumber);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please Enter a Valid Number');
  } else if (guess < 1) {
    alert('Please Enter a Number between 1 to 100');
  } else if (guess > 100) {
    alert('Please Enter a number Between 1 to 100');
  } else {
    prevGuess.push(guess);
    if (numberOfGuesses > 10) {
      displayGuess(guess);
      displayMessage(`Game Over and Random Number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You Win! Your Guess was Right!`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Guessed Number is very Low Baby! Try Again!`);
  } else if (guess > randomNumber) {
    displayMessage(
      `Guessed Number is very high Baby! have One More Chance so Try Again!`
    );
  }
}

function displayGuess(guess) {
  // A Clean-up Method
  userInput.value = '';
  userGuesses.innerHTML += `  ${guess}     `;
  numberOfGuesses++;
  remaining.innerHTML = `${11 - numberOfGuesses}`;
}

function displayMessage(message) {
  lowOrHigh.innerHTML = `<h3>${message}</h3>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="startNewGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  startNewGame();
}

function startNewGame() {
  const newGameButton = document.querySelector('#startNewGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = Math.floor(Math.random() * 100 + 1);
    prevGuess = [];
    numberOfGuesses = 1;
    userGuesses.innerHTML = '';
    remaining.innerHTML = `${11 - numberOfGuesses}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}

```