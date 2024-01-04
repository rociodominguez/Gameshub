import initializeHangman from './src/components/Hangman/Hangman';
import initializeRock from './src/components/Rock/Rock';
import initializeTrivial from './src/components/Trivial/Trivial';
import createHomePage from './src/components/Home/Home';
import clearContent from './utils/clearContent';

createHomePage();

document.querySelector("#hangman-link").addEventListener("click", () => {
  clearContent();
  initializeHangman();
});
document.querySelector("#rock-link").addEventListener("click", () => {
  clearContent()
  initializeRock();
});

document.querySelector("#trivial-link").addEventListener("click", () => {
  clearContent()
  initializeTrivial();
});