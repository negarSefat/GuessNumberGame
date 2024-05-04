'use strict';

//variables definition
let secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

//function for the same message changes
function printMessage(mg) {
  document.querySelector('.message').textContent = mg;
}

//click action for check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //Statements
  //when input is invalid
  if (!guess || guess < 1 || guess > 20) {
    printMessage('❌ Not a valid number');

    //when input is the same with secret number
  } else if (guess === secretnumber) {
    printMessage('✅ Correct Number ');
    document.querySelector('.secretNumber').textContent = secretnumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.secretNumber').style.width = '250px';

    //high score settings
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //when input is higher than secret number
  } else if (guess > secretnumber) {
    printMessage('📈 Too high');
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      printMessage('❌Game Over');
      document.querySelector('.score').textContent = 0;
    }

    //when input is lower than secret number
  } else if (guess < secretnumber) {
    printMessage('📉 Too low');
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      printMessage('❌ Game Over');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//Restart the game with again button

document.querySelector('.again').addEventListener('click', function () {
  printMessage('❓ Start Guessing...');
  document.querySelector('.score').textContent = '20';
  secretnumber = Number(Math.trunc(Math.random() * 20) + 1); //new random number
  document.querySelector('.secretNumber').textContent = '?';
  document.querySelector('.guess').value = ''; //empty string
  document.querySelector('body').style.backgroundColor = 'rgb(227, 239, 239)';
  document.querySelector('.secretNumber').style.width = '100px'; //reset styles
});
