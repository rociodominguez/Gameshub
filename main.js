import initializeHangman from './src/components/Hangman/Hangman';
import initializeRock from './src/components/Rock/Rock';
import initializeTrivial from './src/components/Trivial/Trivial';
import createHomePage from './src/components/Home/Home';

createHomePage();

document.querySelector("#hangman-link").addEventListener("click", () => {
  initializeHangman();
});
document.querySelector("#rock-link").addEventListener("click", () => {
  initializeRock();
});

document.querySelector("#trivial-link").addEventListener("click", () => {
  initializeTrivial();
});