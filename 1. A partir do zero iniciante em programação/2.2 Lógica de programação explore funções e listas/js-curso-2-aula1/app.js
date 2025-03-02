const state = {
    view: {
        title: document.querySelector('h1'),
        message: document.querySelector('p'),
        guessInput: document.querySelector('input'),
    },
    values: {
        secretNumbersList: [],
        secretNumber: 0,
        attempts: 0,
        maxNumber: 100,
        guess: 0,
    },
    actions: {
        newGameButton: document.getElementById('new_game'),
        checkGuessButton: document.getElementById('check_guess'),
    },
}

function generateRandomNumber() {
    const number = Math.floor(Math.random() * state.values.maxNumber) + 1;
    const quantityList = state.values.secretNumbersList.length;

    if (quantityList == state.values.maxNumber) {
        state.values.secretNumbersList = [];
    }

    if (state.values.secretNumbersList.includes(number)) {
        return generateRandomNumber();
    } else {
        state.values.secretNumbersList.push(number);
        return number;
    }
}

function checkGuess() {
    state.values.attempts++;
    state.values.guess = parseInt(state.view.guessInput.value);
    
    if (state.values.guess == state.values.secretNumber) {
        state.view.title.textContent = `Parabéns! Você acertou!`;
        state.view.message.textContent = `Você acertou em ${state.values.attempts} tentativa${state.values.attempts > 1 ? 's' : ''}.`;
        state.actions.newGameButton.removeAttribute('disabled');
        state.actions.checkGuessButton.setAttribute('disabled', 'true');
    } else {
        const hint = state.values.guess > state.values.secretNumber ? 'menor' : 'maior';
        state.view.message.textContent = `Errou! O número secreto é ${hint} que ${state.values.guess}.`;
        state.view.guessInput.value = '';
    }
}

function newGame() {
    state.values.secretNumber = generateRandomNumber();
    state.values.attempts = 0;
    state.view.guessInput.value = '';
    state.view.title.textContent = 'Jogo do número secreto';
    responsiveVoice.speak('Jogo do número secreto', 'Brazilian Portuguese Female', { rate: 1.2 });
    state.view.message.textContent = `Escolha um número entre 1 e ${state.values.maxNumber}.`;
    state.actions.newGameButton.setAttribute('disabled', 'true');
    state.actions.checkGuessButton.removeAttribute('disabled');
}

function init() {
    newGame();
    state.actions.newGameButton.addEventListener('click', newGame);
    state.actions.checkGuessButton.addEventListener('click', checkGuess);
}

init();
