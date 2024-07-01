function getComputerChoice() {
    let numChoice = Math.floor(Math.random() * 3) + 1
    if (numChoice == 1) {
        return "rock"
    } else if (numChoice == 2) {
        return "paper"
    } else {
        return "scissors"
    }
}

function getHumanChoice() {
    let humanChoice = prompt("rock, paper, or scissors?")
    return humanChoice
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase()
    computerChoice = computerChoice.toLowerCase()
    if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("You lose! Paper beats Rock")
        computerScore += 1
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You win! Rock beats Scissors")
        humanScore += 1
    } else if (humanChoice == "rock" && computerChoice == "rock") {
        console.log("You tie! Rock is also Rock")
    } else if (humanChoice == "paper" && computerChoice == "paper") {
        console.log("You tie! Paper is also Paper")
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log("You lose! Scissors beat Paper")
        computerScore += 1
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win! Paper beats Rock")
        humanScore += 1
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You win! Scissors beat Paper")
        humanScore += 1
    } else if (humanChoice == "scissors" && computerChoice == "scissors") {
        console.log("You tie! Scissors is also Scissors")
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("You lose! Rock beats Scissors")
        computerScore += 1
    }
}

let computerScore = 0
let humanScore = 0

for (let i = 1; i <= 5; i++) {
    console.log("ROUND " + i + " BEGIN!!!")
    let computerSelection = getComputerChoice()
    let humanSelection = getHumanChoice()

    console.log("computer selected " + computerSelection)
    console.log("human selected " + humanSelection)
    playRound(humanSelection, computerSelection)
    console.log("human: " + humanScore)
    console.log("computer: " + computerScore)
}