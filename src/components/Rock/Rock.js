import "./Rock.css";

const initializeRock = () => {
  const app$$ = document.querySelector('#main');
  const rockGameContainer = document.createElement('div');
  rockGameContainer.classList.add('rock-game-container');

  const title = document.createElement("h1");
  title.textContent = "Piedra, papel o tijera";

  const choices = document.createElement("div");
  choices.classList.add("choices");

  const createButton = (text, choice) => {
    const button = document.createElement("button");
    button.textContent = text;
    button.classList.add("btn");
    button.dataset.choice = choice;
    return button;
  };

  const rockBtn = createButton("Piedra", "piedra");
  const paperBtn = createButton("Papel", "papel");
  const scissorsBtn = createButton("Tijera", "tijera");

  const result = document.createElement("div");
  result.classList.add("result");

  let rockPlayerWins = parseInt(localStorage.getItem("rock-playerWins")) || 0;
  let rockComputerWins = parseInt(localStorage.getItem("rock-computerWins")) || 0;

  const playerWinsDisplay = document.createElement("p");
  playerWinsDisplay.textContent = `Tus victorias: ${rockPlayerWins}`;

  const computerWinsDisplay = document.createElement("p");
  computerWinsDisplay.textContent = `Victorias del oponente: ${rockComputerWins}`;


  choices.append(rockBtn, paperBtn, scissorsBtn);
  rockGameContainer.append(title, choices, result, playerWinsDisplay, computerWinsDisplay);
  app$$.appendChild(rockGameContainer);
  app$$.append(playerWinsDisplay, computerWinsDisplay);

  const buttons = document.querySelectorAll(".btn");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const userChoice = button.dataset.choice;
      const computerChoice = getComputerChoice();
      const winner = getWinner(userChoice, computerChoice);
      showResult(userChoice, computerChoice, winner);

      if (winner === "Has ganado") {
        rockPlayerWins++;
      } else if (winner === "Has perdido") {
        rockComputerWins++;
      }

      updateLocalStorage();
      updateWinDisplays();

      if (rockPlayerWins === 10 || rockComputerWins === 10) {
        resetGame();
      }
    });
  });

  const getComputerChoice = () => {
    const choices = ["piedra", "papel", "tijera"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  };

  const getWinner = (player, computer) => {
    if (player === computer) {
      return "Empate";
    } else if (
      (player === "piedra" && computer === "tijera") ||
      (player === "papel" && computer === "piedra") ||
      (player === "tijera" && computer === "papel")
    ) {
      return "Has ganado";
    } else {
      return "Has perdido";
    }
  };

  const showResult = (user, computer, winner) => {
    result.innerHTML = `
        <p>Has elegido: ${user}</p>
        <p>El oponente ha elegido: ${computer}</p>
        <p>Resultado: ${winner}</p>
      `;
  };

  const updateLocalStorage = () => {
    localStorage.setItem("rock-playerWins", rockPlayerWins.toString());
    localStorage.setItem("rock-computerWins", rockComputerWins.toString());
  };

  const updateWinDisplays = () => {
    playerWinsDisplay.textContent = `Tus victorias: ${rockPlayerWins}`;
    computerWinsDisplay.textContent = `Victorias del oponente: ${rockComputerWins}`;
  };

  const resetGame = () => {
    rockPlayerWins = 0;
    rockComputerWins = 0;
    updateLocalStorage();
    updateWinDisplays();
  };
};

export default initializeRock;