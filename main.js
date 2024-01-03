import initializeHangman from './src/components/Hangman/Hangman';
import initializeRock from './src/components/Rock/Rock';
import initializeTrivial from './src/components/Trivial/Trivial';

const gameContainer = document.getElementById('app');
const hangmanLink = document.getElementById('hangman-link');
const rockLink = document.getElementById('rock-link');
const trivialLink = document.getElementById('trivial-link');

hangmanLink.addEventListener('click', () => {
  gameContainer.innerHTML = '';
  initializeHangman(gameContainer);
});

rockLink.addEventListener('click', () => {
  gameContainer.innerHTML = '';
  initializeRock(gameContainer);
});

trivialLink.addEventListener('click', () => {
  gameContainer.innerHTML = '';
  initializeTrivial(gameContainer);
});
