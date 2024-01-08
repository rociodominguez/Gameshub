import initializeHangman from './src/components/Hangman/Hangman';
import initializeRock from './src/components/Rock/Rock';
import initializeTrivial from './src/components/Trivial/Trivial';
import initializeHome from './src/components/Home/Home'

const app$$ = document.querySelector("#app");
const initialApp = () => {
   app$$.innerHTML = `
   <main id="main"></main>
   `;
   initializeHome();
};
initialApp();

const main$$ = document.querySelector('#main')
const printHangmanGame = (event) => {
  event.preventDefault();
  const linkHref = event.target.href;
  main$$.innerHTML = '';
  initializeHangman();
}

const printRockGame = (event) => {
  event.preventDefault();
  const linkHref = event.target.href;
  main$$.innerHTML = '';
  initializeRock();
}

const printTrivialGame = (event) => {
  event.preventDefault();
  const linkHref = event.target.href;
  main$$.innerHTML = '';
  initializeTrivial();
}

const clickHangman = document.querySelector('#hangman-link');
clickHangman.addEventListener('click', printHangmanGame);

const clickRock = document.querySelector('#rock-link');
clickRock.addEventListener('click', printRockGame);

const clickTrivial = document.querySelector('#trivial-link');
clickTrivial.addEventListener('click', printTrivialGame);