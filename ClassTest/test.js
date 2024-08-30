let stableDigit = 500;
let randomNumber = Math.ceil(Math.random() * 9); 

document.getElementById('checkButton').addEventListener('click', checkGuess);

function checkGuess() {
    const guessInput = document.getElementById('guess');
    const guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < 1 || guess > 9) {
        document.getElementById('result').textContent = "Please enter a number between 1 and 9.";
        return;
    }

    if (guess === randomNumber) {
        stableDigit += 100;
        document.getElementById('result').textContent = "Congratulations! You guessed it right.";
    } else {
        stableDigit -= 100;
        document.getElementById('result').textContent = `Sorry, the number was ${randomNumber}. Try again.`;
    }

    document.getElementById('stableDigit').textContent = `Stable Digit: ${stableDigit}`;

    // Generate new random number for the next round
    randomNumber = Math.ceil(Math.random() * 9); // Use Math.ceil() again for the next random number
}
