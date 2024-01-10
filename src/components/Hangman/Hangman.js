import './Hangman.css'

const initializeHangman = () => {

    const ARRAY_WORDS = ['madera', 'chocolate', 'fresa', 'autocaravana', 'kiwi', 'trabajo', 'viernes', 'zoologico', 'tilde', 'paraguas'];
    
    let chosenWord = '';
    let attemptedWords = [];
    let remainingAttempts = 6;
    let guessedWord = [];

    const selectRandomWord = () => {
        const randomIndex = Math.floor(Math.random() * ARRAY_WORDS.length);
        chosenWord = ARRAY_WORDS[randomIndex].toLowerCase();
    };

    const createWordDisplay = (parentElement) => {
        const wordDisplay = document.createElement('div');
        wordDisplay.id = 'word-display';
        parentElement.appendChild(wordDisplay);
        return wordDisplay;
    };

    const createAttemptsDisplay = (parentElement) => {
        const attemptsLeft = document.createElement('div');
        attemptsLeft.id = 'attempts-left';
        attemptsLeft.textContent = `Quedan: ${remainingAttempts} intentos`;
        parentElement.appendChild(attemptsLeft);
        return attemptsLeft;
    };

    const createLetterInput = (parentElement) => {
        const letterInput = document.createElement('input');
        letterInput.type = 'text';
        letterInput.id = 'letter-input';
        letterInput.maxLength = '1';
        parentElement.appendChild(letterInput);
        return letterInput;
    };

    const createGuessButton = (parentElement) => {
        const guessButton = document.createElement('button');
        guessButton.textContent = 'Adivinar';
        guessButton.id = 'guess-button';
        parentElement.appendChild(guessButton);
        return guessButton;
    };

    const createResetButton = (parentElement) => {
        const resetButton = document.createElement('button');
        resetButton.textContent = 'Reiniciar Partida';
        resetButton.id = 'reset-button';
        parentElement.appendChild(resetButton);
        return resetButton;
    };

    const setupInputEvents = (letterInput, guessButton) => {
        guessButton.addEventListener('click', () => {
            const letter = letterInput.value.trim();
            handleGuess(letter);
        });

        letterInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                const letter = letterInput.value.trim();
                handleGuess(letter);
            }
        });
    };

    const resetGame = () => {
        attemptedWords = [];
        remainingAttempts = 6;
        selectRandomWord();
        guessedWord = [];
        for (let i = 0; i < chosenWord.length; i++) {
            guessedWord.push('_');
        }
        showGuessedWord(guessedWord);
        updateAttemptsDisplay();
    };

    const handleGuess = (letter) => {
        if (remainingAttempts > 0) {
            if (letter.length === 1 && letter.match(/[a-z]/)) {
                guessLetter(letter);
                document.getElementById('letter-input').value = '';
            } else {
                alert('Introduce una letra');
            }
        } else {
            alert('¡Se acabaron los intentos! Has perdido');
        }
    };

    const guessLetter = (letter) => {
        letter = letter.toLowerCase();
        const isLetterInWord = chosenWord.includes(letter);

        if (!attemptedWords.includes(letter)) {
            attemptedWords.push(letter);
            if (!isLetterInWord) {
                remainingAttempts--;
            } else {
                for (let i = 0; i < chosenWord.length; i++) {
                    if (chosenWord[i] === letter) {
                        guessedWord[i] = letter;
                    }
                }
            }

            updateAttemptsDisplay();
            showGuessedWord(guessedWord);

            if (checkWin()) {
                handleGameWon();
            } else if (remainingAttempts === 0) {
                handleGameLost();
            }
        } else {
            alert('¡Ya has probado esta letra! Prueba con otra');
        }
    };

    const updateAttemptsDisplay = () => {
        const attemptsLeft = document.querySelector('#attempts-left');
        attemptsLeft.textContent = `Quedan ${remainingAttempts} intentos`;
        const isGameOver = remainingAttempts === 0;
        document.getElementById('letter-input').disabled = isGameOver;
        document.getElementById('guess-button').disabled = isGameOver;
    };

    const showGuessedWord = (guessedWord) => {
        const wordDisplay = document.getElementById('word-display');
        wordDisplay.innerHTML = guessedWord.join(' ');
    };

    const checkWin = () => {
        return !guessedWord.includes('_');
    };

    const handleGameWon = () => {
        alert('¡Felicidades! ¡Has ganado!');
        disableInputAndButton();
    };

    const handleGameLost = () => {
        alert('¡Se acabaron los intentos! ¡Has perdido!');
        disableInputAndButton();
    };

    const disableInputAndButton = () => {
        document.getElementById('letter-input').disabled = true;
        document.getElementById('guess-button').disabled = true;
    };

    selectRandomWord();

    const app$$ = document.querySelector("#main");
    const hangmanGameContainer = document.createElement('div');
    hangmanGameContainer.classList.add('hangman-game-container');
    app$$.appendChild(hangmanGameContainer);

    const wordDisplay = createWordDisplay(hangmanGameContainer);
    const attemptsLeft = createAttemptsDisplay(hangmanGameContainer);
    const letterInput = createLetterInput(hangmanGameContainer);
    const guessButton = createGuessButton(hangmanGameContainer);
    const resetButton = createResetButton(hangmanGameContainer);

    resetButton.addEventListener('click', resetGame);
    setupInputEvents(letterInput, guessButton);

    showGuessedWord(guessedWord);
    updateAttemptsDisplay();

    return { guessLetter };
};

export default initializeHangman;