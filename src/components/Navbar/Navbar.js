import initializeHangman from "../Hangman/Hangman";
import initializeRock from "../Rock/Rock";
import initializeTrivial from "../Trivial/Trivial";

const printNavBar = () => {
    const navbarElement = document.createElement('nav');

    const hangmanLink = document.createElement('a');
    hangmanLink.textContent = 'Juego 1';
    hangmanLink.onclick = function() {
        initializeHangman();
    };
    navbarElement.appendChild(hangmanLink);

    const rockLink = document.createElement('a');
    rockLink.textContent = 'Juego 2';
    rockLink.onclick = function() {
        initializeRock();
    };
    navbarElement.appendChild(rockLink);

    const trivialLink = document.createElement('a');
    trivialLink.textContent = 'Juego 3';
    trivialLink.onclick = function() {
        initializeTrivial();
    };
    navbarElement.appendChild(trivialLink);

    return navbarElement;
};

export default printNavBar;