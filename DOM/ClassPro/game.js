let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let resetCount = 0;


function onShowResult() {
    const guess = document.getElementById('checkNumber').value;
    attempts++;
    let result = '';
    console.log(randomNumber);

    if (guess == randomNumber) {
        result = `"Hurray!!!! You guessed the number in ${attempts} attempts.`;
    } else if (guess < randomNumber) {
        result = 'Too low! Try again.';
    } else {
        result = 'Too high! Try again.';
    }

    document.getElementById('result').textContent = result;
    document.getElementById('attempts').textContent = `Attempts: ${attempts}`;

    console.log(`Attempt ${attempts}: guessed ${guess}`);
}

function onReset() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    resetCount++;
    console.log(randomNumber);
    document.getElementById('checkNumber').value = '';
    document.getElementById('result').textContent = '';
    document.getElementById('attempts').textContent = '';
    document.getElementById('resetCount').textContent = `Reset Count: ${resetCount}`;

    console.log(`Game reset. Reset count: ${resetCount}`);
}
