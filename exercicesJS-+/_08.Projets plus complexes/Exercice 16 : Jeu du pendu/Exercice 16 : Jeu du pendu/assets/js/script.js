const words = ["javascript", "html", "css", "react", "node"];
const randomWord = words[Math.floor(Math.random() * words.length)];
let guessedLetters = [];
let lives = 10;
let incorrectLetters = [];

function updateWordDisplay() {
    let displayWord = '';
    for (let letter of randomWord) {
        if (guessedLetters.includes(letter)) {
            displayWord += letter + ' ';
        } else {
            displayWord += '_ ';
        }
    }
    document.getElementById('wordDisplay').textContent = displayWord.trim();
}

function guessLetter() {
    const letter = document.getElementById('letterInput').value.toLowerCase();
    if (letter && !guessedLetters.includes(letter) && !incorrectLetters.includes(letter)) {
        if (randomWord.includes(letter)) {
            guessedLetters.push(letter);
        } else {
            incorrectLetters.push(letter);
            lives--;
            document.getElementById('lives').textContent = lives;
        }

        updateWordDisplay();
        document.getElementById('incorrectLetters').textContent = incorrectLetters.join(', ');

        if (lives === 0) {
            document.getElementById('message').textContent = "Vous avez perdu ! Le mot était : " + randomWord;
        } else if (!document.getElementById('wordDisplay').textContent.includes('_')) {
            document.getElementById('message').textContent = "Félicitations, vous avez gagné !";
        }
    }

    document.getElementById('letterInput').value = '';
}

updateWordDisplay();
