const initializeHome = () => {
  const main = document.querySelector('#main');
  main.innerHTML = 
    `
    <h1>Bienvenidos a mi hub!</h1>
      <nav>
        <ul class="navbar">
          <li>
            <a href="#" id="hangman-link">El ahorcado</a>
          </li>
          <li>
            <a href="#" id="rock-link">Piedra, papel o tijera</a>
          </li>
          <li>
            <a href="#" id="trivial-link">Test de personalidad</a>
          </li>
          </ul>
        </nav>
  `;
};

export default initializeHome;