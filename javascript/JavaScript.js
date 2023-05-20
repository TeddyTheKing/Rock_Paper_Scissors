// Rock, paper, scissors choice through random number
function getComputerChoice () {
    let randomNumber =  Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        return "rock";
    } else if (randomNumber === 2) {
        return "paper";
    } else {
        return "scissors";
    };
};

// Function that plays 1 round of paper, rock, scissors
function oneRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie, let's play again!"
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose, paper is the superior weapon against the rock for some reason";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose, scissors goes through paper like a sharp object going through paper.";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose, why would you try to cut a rock?"
    } else {
        return "You win! You really are the master of the randomness!"
    }
}
// Parametres for oneRound function
const computerSelection = getComputerChoice();
const playerSelection = prompt("Rock, Paper or Scissors? Your choice: ").toLowerCase();

console.log(playerSelection);
console.log(computerSelection);
console.log(oneRound(playerSelection, computerSelection));