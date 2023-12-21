import './style.css';
import createGameButton from './src/components/GameButton/GameButton';
import initializeHangman from './src/components/Hangman/Hangman';
import initializeRock from './src/components/Rock/Rock';
import initializeTrivial from './src/components/Trivial/Trivial';

const app = document.getElementById('app');

const hangmanButton = createGameButton('Hangman', initializeHangman);
const rockButton = createGameButton('Rock, paper, Scissors', initializeRock);
const trivialButton = createGameButton('Trivial', initializeTrivial);

app.appendChild(hangmanButton);
app.appendChild(rockButton);
app.appendChild(trivialButton);