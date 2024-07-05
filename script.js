const body = document.querySelector("body");
const gameArea = document.querySelector(".game-area");
const choice = document.createElement("p");
let computerScore = 0;
let humanScore = 0;

const score = document.createElement("div");
score.id = "score";
score.style.marginTop = "10px";
const results = document.createElement("p");
results.id = "results";

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    choice.innerHTML = `You selected: ${humanChoice} <br>Computer selected: ${computerChoice}<br>`;
    gameArea.appendChild(choice);
    if (humanChoice === computerChoice) {
        choice.innerHTML += `You tied! ${humanChoice} is also ${computerChoice}`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        choice.innerHTML += `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore += 1;
    } else {
        choice.innerHTML += `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore += 1;
    }

    updateScore();
}

function updateScore() {
    results.textContent = "";

    score.textContent = `Human: ${humanScore} Computer: ${computerScore}`;
    gameArea.appendChild(score);

    if (humanScore === 5 || computerScore === 5) {
        showResults();
    }
}

function showResults() {
    if (humanScore === 5) {
        results.textContent = "You have won!";
    } else {
        results.textContent = "You have lost!";
    }

    gameArea.appendChild(results);
    humanScore = 0;
    computerScore = 0;
}

function handleSelection(selection) {
    console.log(`Human selected ${selection}`);
    const computerSelection = getComputerChoice();
    console.log(`Computer selected ${computerSelection}`);
    playRound(selection, computerSelection);
}

const buttons = document.querySelectorAll(".btn-choice");
buttons.forEach(button => {
    button.addEventListener("click", function (e) {
        handleSelection(button.textContent.toLowerCase());
    });
});
