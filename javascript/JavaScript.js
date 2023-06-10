// Computer choice by random number
function getComputerChoice() {
    let randomNumber =  Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        return "rock";
    } else if (randomNumber === 2) {
        return "paper";
    } else {
        return "scissors";
    };
};

// Score counter
let compCounter = 0;
let userCounter = 0;

// Function that plays 1 round of paper, rock, scissors
function oneRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log(`It's a draw. PlayerScore ${userCounter} : ComputerScore ${compCounter}`);
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log(`Computer wins this round. PlayerScore: ${userCounter} : ComputerScore ${++compCounter}`);
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log(`Computer wins this round. PlayerScore: ${userCounter} : ComputerScore ${++compCounter}`);
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log(`Computer wins this round. PlayerScore: ${userCounter} : ComputerScore ${++compCounter}`);
    } else {
        console.log(`You win this round. PlayerScore: ${++userCounter} : ComputerScore ${compCounter}`);
    }
}

// Frunction for playing the whole game
function playRounds() {
    while (compCounter < 5 && userCounter < 5) {
        let playerSelection = prompt("Rock, Paper or Scissors? Your choice: ").toLowerCase();
        let computerSelection = getComputerChoice();
        oneRound(playerSelection, computerSelection);

        if (compCounter === 5) {
                console.log("Computer won!")
            } else if (userCounter === 5) {
                console.log("You've won!")
            };
    } ;
};

playRounds();