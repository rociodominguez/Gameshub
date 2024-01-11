import './Home.css'

const initializeHome = () => {
  const header = document.querySelector("#header");
  header.innerHTML = `
    <div class="home">
      <h1>Games Hub</h1>
      <nav class="navbar">
        <ul>
          <li>
            <button class="btn" id="hangman-link">El ahorcado</button>
          </li>
          <li>
            <button class="btn" id="rock-link">Piedra, papel o tijera</button>
          </li>
          <li>
            <button class="btn" id="trivial-link">Test de personalidad</button>
          </li>
        </ul>
      </nav>
    </div>
  `;
};

export default initializeHome;