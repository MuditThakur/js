const choices = document.querySelectorAll('.choice');
const resultText = document.getElementById('result-text');
const winSound = document.getElementById('win-sound');
const loseSound = document.getElementById('lose-sound');

const choicesMap = {
    'rock': 'Rock',
    'paper': 'Paper',
    'scissors': 'Scissors'
};

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        playGame(choice.id);
    });
});

function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    const result = getResult(playerChoice, computerChoice);
    displayResult(result, playerChoice, computerChoice);
    playSound(result);
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getResult(player, computer) {
    if (player === computer) {
        return 'draw';
    }
    if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return 'win';
    } else {
        return 'lose';
    }
}

function displayResult(result, playerChoice, computerChoice) {
    if (result === 'win') {
        resultText.textContent = `You Win! ${choicesMap[playerChoice]} beats ${choicesMap[computerChoice]}`;
        resultText.parentElement.classList.remove('lose');
        resultText.parentElement.classList.add('win');
    } else if (result === 'lose') {
        resultText.textContent = `You Lose! ${choicesMap[computerChoice]} beats ${choicesMap[playerChoice]}`;
        resultText.parentElement.classList.remove('win');
        resultText.parentElement.classList.add('lose');
    } else {
        resultText.textContent = `It's a Draw! You both chose ${choicesMap[playerChoice]}`;
        resultText.parentElement.classList.remove('win', 'lose');
    }
}

function playSound(result) {
    if (result === 'win') {
        winSound.play();
    } else if (result === 'lose') {
        loseSound.play();
    }
}
