// Word sets
const wordSets = [
    ["drive", "safe", "zone", "out", "smart", "phone"],
    ["work", "hard", "drive", "safe", "place", "value"],
    ["computer", "science", "experiment", "outcome", "analysis", "report"],
    ["note", "book", "mark", "sheet", "strap", "down"]
];

let currentWords = []; // The current word set in use
let currentWordIndex = 1; // Start guessing from the second word
let revealedLetters = []; // Track revealed letters for each word

// DOM elements
const wordDisplay = document.getElementById("word-list");
const guessInput = document.getElementById("guess");
const messageDisplay = document.getElementById("message");
const hintButton = document.getElementById("hint-button"); // Hint button element

// Function to load a new word set
function loadNewWordSet() {
    // Pick a random set from the available word sets
    currentWords = wordSets[Math.floor(Math.random() * wordSets.length)];
    currentWordIndex = 1; // Reset to the second word
    revealedLetters = currentWords.map(word => [word[0]]); // Initialize revealed letters with the first letter
    updateWordList();
}

// Function to display the word list
function updateWordList() {
    let wordListHtml = currentWords
        .map((word, index) => {
            if (index === 0) {
                return `<p>${word}</p>`; // Fully reveal the first word
            } else if (index < currentWordIndex) {
                return `<p>${word}</p>`; // Fully reveal guessed words
            } else {
                const revealedPart = revealedLetters[index].join('');
                const hiddenPart = "_ ".repeat(word.length - revealedPart.length);
                return `<p>${revealedPart}${hiddenPart}</p>`; // Show partially revealed word
            }
        })
        .join("");
    wordDisplay.innerHTML = wordListHtml;
}

// Function to handle a guess
function submitGuess() {
    const guess = guessInput.value.trim().toLowerCase();
    guessInput.value = ""; // Clear input field

    if (!guess) {
        messageDisplay.textContent = "Please enter a word!";
        return;
    }

    if (guess === currentWords[currentWordIndex]) {
        // Correct guess
        currentWordIndex++;
        messageDisplay.textContent = "Correct!";
        if (currentWordIndex === currentWords.length) {
            alert("Congratulations! You've guessed all the words!");
            loadNewWordSet(); // Load a new set when the game finishes
        } else {
            updateWordList();
        }
    } else {
        // Incorrect guess
        messageDisplay.textContent = "Incorrect! Try again.";
    }
}

// Function to reveal the next letter for the current word when hint button is pressed
function revealNextLetter() {
    if (currentWordIndex < currentWords.length) {
        const currentWord = currentWords[currentWordIndex];
        const revealedPart = revealedLetters[currentWordIndex];

        // Reveal the next letter of the current word if there are any remaining hidden letters
        if (revealedPart.length < currentWord.length) {
            revealedPart.push(currentWord[revealedPart.length]);
            updateWordList();
        }
    }
}

// Initialize the game
loadNewWordSet();

// Add event listener to the hint button
hintButton.addEventListener("click", revealNextLetter);
