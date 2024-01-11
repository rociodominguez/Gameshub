import initializeHangman from './src/components/Hangman/Hangman';
import initializeRock from './src/components/Rock/Rock';
import initializeTrivial from './src/components/Trivial/Trivial';
import initializeHome from './src/components/Home/Home';

const app$$ = document.querySelector("#app");

const initialApp = () => {
   app$$.innerHTML = `
   <div id="main"></div>
   `;
   initializeHome();
};

initialApp();

const main$$ = document.querySelector('#main');

const printHangmanGame = (event) => {
  event.preventDefault();
  main$$.innerHTML = '';
  initializeHangman();
};

const printRockGame = (event) => {
  event.preventDefault();
  main$$.innerHTML = '';
  initializeRock();
};

const printTrivialGame = (event) => {
  event.preventDefault();
  main$$.innerHTML = '';
  initializeTrivial();
};

const clickHangman = document.querySelector('#hangman-link');
clickHangman.addEventListener('click', printHangmanGame);

const clickRock = document.querySelector('#rock-link');
clickRock.addEventListener('click', printRockGame);

const clickTrivial = document.querySelector('#trivial-link');
clickTrivial.addEventListener('click', printTrivialGame);