const createGameButton = (text, onclick) => {
    const button = document.createElement('button');
    button.textContent = text;
    button.addEventListener('click', onclick);

    return button;
};

export default createGameButton;