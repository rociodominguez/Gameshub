import "./Trivial.css";

const initializeTrivial = () => {

  const app = document.getElementById("main");
  app.innerHTML = '';
  const trivialGameContainer = document.createElement('div');
  trivialGameContainer.classList.add('trivial-game-container');
  app.appendChild(trivialGameContainer);

  const ARRAY_QUESTIONS = [
    {
      question:
        "Estás atrapado/a en una isla desierta, ¡pero tienes Wi-Fi! ¿Qué prefieres tener contigo?",
      options: [
        "Un libro electrónico",
        "Un kit de supervivencia estilo MacGyver",
        "Un mapa del lugar con memes ocultos",
      ],
      answerIndex: 1,
    },
    {
      question:
        "Te encuentras en una sala llena de libros raros y antiguos, pero solo puedes llevar uno. ¿Cuál te llama más la atención?",
      options: [
        "Un libro de hechizos antiguos",
        "Un diario de un viajero del tiempo",
        "Un tratado sobre criaturas míticas ilustradas",
      ],
      answerIndex: 0,
    },
    {
      question:
        "Estás en una montaña rusa y se detiene en la cima más alta. ¿Qué haces para emocionarte más?",
      options: [
        "Te haces una selfie con cara de '¡Socorro!'",
        "Gritas cosas aleatorias para asustar a los demás",
        "Piensas en cómo escribirás tu próximo post sobre esta experiencia",
      ],
      answerIndex: 2,
    },
    {
      question:
        "Te das cuenta de que tienes dos zapatos diferentes puestos en una fiesta. ¿Qué haces?",
      options: [
        "Lo conviertes en una nueva tendencia de moda",
        "Te quitas los zapatos y bailas descalzo/a",
        "Decides que hoy es el día del 'estilo espontáneo' y sigues bailando",
      ],
      answerIndex: 0,
    },
    {
      question:
        "Estás en un parque y ves a un grupo de artistas callejeros. ¿Qué te llama más la atención?",
      options: [
        "Quieres unirte a ellos y mostrar tus habilidades ocultas",
        "Te detienes y te conviertes en su crítico",
        "Sigues caminando pero secretamente te unes al flashmob que están organizando",
      ],
      answerIndex: 2,
    },
    {
      question:
        "Encuentras un antiguo mapa del tesoro en el ático de tu casa. ¿Qué haces para resolver este misterio?",
      options: [
        "Invitas a tus amigos y organizan un 'Safari del Tesoro'",
        "Lo enmarcas y lo pones como decoración temática",
        "Compartes pistas en TikTok y retas a tus seguidores a encontrar el tesoro contigo",
      ],
      answerIndex: 2,
    },
    {
      question:
        "Te ofrecen saltarte la fila en una atracción emocionante en un parque de diversiones. ¿Aceptas este trato VIP?",
      options: [
        "No, ¡esperar es parte de la emoción!",
        "¡Claro! ¡Vamos a sentir esa adrenalina antes que nadie!",
        "Dudas un poco pero al final aceptas, ¡la emoción te llama!",
      ],
      answerIndex: 1,
    },
    {
      question: "Te sirven la comida incorrecta en un restaurante. ¿Qué haces?",
      options: [
        "Mencionas el error al camarero con un toque de humor",
        "Lo pruebas y decides que las sorpresas son parte de la vida",
        "Te animas a crear tu propia versión gourmet de la comida incorrecta",
      ],
      answerIndex: 0,
    },
    {
      question:
        "Encuentras un misterioso reloj que puede rebobinar el tiempo por un día. ¿Para qué lo usarías?",
      options: [
        "Para crear situaciones divertidas",
        "Para revivir momentos bonitos",
        "Para experimentar diferentes épocas",
      ],
      answerIndex: 1,
    },
    {
      question:
        "Viajas en el tiempo y te encuentras contigo mismo/a de pequeño/a. ¿Qué haces para no alterar la línea temporal?",
      options: [
        "Le das consejos de moda para que no vuelva a los skinny jeans",
        "Le enseñas tu meme favorito",
        "Te alejas sigilosamente mientras haces señales con las manos para no ser descubierto",
      ],
      answerIndex: 2,
    },
  ];

  const personalityDefinitions = {
    1: "Eres una persona aventurera y creativa. Te gusta enfrentar desafíos y encontrar soluciones ingeniosas. Siempre estás listo/a para nuevas experiencias y te adaptas fácilmente a los cambios.",
    2: "Eres una persona centrada y práctica. Valoras la estabilidad y la planificación. Tienes una mente lógica y analítica que te ayuda a abordar los problemas de manera sistemática.",
    3: "Eres una persona sociable y extrovertida. Disfrutas estar rodeado/a de gente y siempre estás listo/a para nuevas experiencias sociales. Eres creativo/a y adaptable en diferentes situaciones."
  };
  
  const personalities = () => {
    const resultContainer = document.createElement('div');
    resultContainer.id = 'result-container';

    const randomPersonality = Math.floor(Math.random() * 3) + 1;

    const personalityNumber = document.createElement('h2');
    personalityNumber.textContent = 'Tu personalidad es del tipo ' + randomPersonality;

    const personalityDefinition = document.createElement('p');
    personalityDefinition.textContent = personalityDefinitions[randomPersonality];

    const restartTest = document.createElement('button');
    restartTest.id = 'restart-button'
    restartTest.textContent = 'Reiniciar Test';
    restartTest.addEventListener('click', handleRestart);
    resultContainer.appendChild(personalityNumber);
    resultContainer.appendChild(personalityDefinition);
    resultContainer.appendChild(restartTest);

    trivialGameContainer.appendChild(resultContainer);

    const questionContainer = document.getElementById('question-container');
    if (questionContainer) {
      questionContainer.replaceWith(resultContainer);
    } else {
      document.body.appendChild(resultContainer);
    }
  };

  const selectedAnswer = (index) => {
    if (questionPosition < ARRAY_QUESTIONS.length - 1) {
      questionPosition++;
      questionContainer();
    } else {
      personalities();
    }
  };

  const handleRestart = () => {
    const resultContainer = document.getElementById('result-container');
    if (resultContainer) {
      resultContainer.remove();
    }
  
    const questionDiv = document.getElementById('question-container');
    if (questionDiv) {
      questionDiv.remove();
    }
  
    questionPosition = 0;
    app.innerHTML = '';
    questionContainer();
  };

  const questionContainer = () => {
    const questionDiv = document.createElement('div');
    questionDiv.id = 'question-container';

    const questionText = document.createElement('h3');
    questionText.textContent = ARRAY_QUESTIONS[questionPosition].question;
    questionDiv.appendChild(questionText);

    const answers = ARRAY_QUESTIONS[questionPosition].options.map((answer, index) => {
      const answerButton = document.createElement('button');
      answerButton.textContent = answer;
      answerButton.addEventListener('click', () => selectedAnswer(index));
      questionDiv.appendChild(answerButton);
      return answerButton;
    });

    const secondQuestionContainer = document.getElementById('question-container');
    if (secondQuestionContainer) {
      secondQuestionContainer.replaceWith(questionDiv);
    } else {
      app.appendChild(questionDiv);
    }
  };

  let questionPosition = 0;
  questionContainer();
};

export default initializeTrivial;