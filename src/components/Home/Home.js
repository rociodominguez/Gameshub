import clearContent from '../../../utils/clearContent';

const createHomePage = () => {
    const main = document.getElementById("app");
    clearContent();

    const title = document.createElement('h1');
    title.textContent = '¡Bienvenido a mi hub!';

    const hangmanButton = document.createElement('button');
    hangmanButton.textContent = 'Juego del Ahorcado';
    hangmanButton.id = 'hangman-link';

    const rockButton = document.createElement('button');
    rockButton.textContent = 'Juego de Piedra, Papel o Tijera';
    rockButton.id = 'rock-link';

    const trivialButton = document.createElement('button');
    trivialButton.textContent = 'Juego Trivial';
    trivialButton.id = 'trivial-link';

    main.appendChild(title);
    main.appendChild(hangmanButton);
    main.appendChild(rockButton);
    main.appendChild(trivialButton);
};

export default createHomePage;