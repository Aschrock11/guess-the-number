'use strict';




let secretNumber = Math.trunc(Math.random() * 20 + 1)


let score = 20
let highScore = 0
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message
}

console.log(secretNumber, score)


// document.querySelector('.number').textContent = secretNumber

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value)


    // When there is no input value
    if (!guess) {
        // document.querySelector('.message').textContent = 'No Number!'
        displayMessage('No Number!')
    }
    // When player guesses wrong
    else if (guess !== secretNumber) {
        if (score > 0) {
            // document.querySelector('.message').textContent = guess > secretNumber ? 'Too High!' : 'Too Low!'
            displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!')
            score--
            document.querySelector('.score').textContent = score
        }

        else {
            // document.querySelector('.message').textContent = 'YOU LOSE YOU SUCK'
            displayMessage('YOU LOSE YOU SUCK')
            document.querySelector('body').style.backgroundColor = '#FF0000';
        }

    }
    // // When player guesses higher than secret number
    // else if (guess > secretNumber) {
    //     if (score > 0) {
    //         document.querySelector('.message').textContent = 'Too Low!'
    //         score--
    //         document.querySelector('.score').textContent = score
    //     }

    //     else {
    //         document.querySelector('.message').textContent = 'YOU LOSE YOU SUCK';
    //         document.querySelector('body').style.backgroundColor = '#FF0000';
    //     }
    // }
    // // When player guesses lower than secret number
    // else if (guess < secretNumber) {
    //     if (score > 0) {
    //         document.querySelector('.message').textContent = 'Too Low!'
    //         score--
    //         document.querySelector('.score').textContent = score
    //     }

    //     else {
    //         document.querySelector('.message').textContent = 'YOU LOSE YOU SUCK';
    //         document.querySelector('body').style.backgroundColor = '#FF0000';
    //     }
    // }
    // When player guesses the correct number
    else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct Number!! You WIN!';
        document.querySelector('body').style.backgroundColor = '#60B347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore
        }
    }
})

document.querySelector('.again').addEventListener('click', function () {
    score = 20
    Math.trunc(Math.random() * 20 + 1)
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...')
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = ''
    document.querySelector('.number').textContent = '?'
    document.querySelector('.score').textContent = score



});


