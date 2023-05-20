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
// console.log(getComputerChoice());

// Function that plays 1 round of paper, rock, scissors
function oneRound (par1, par2) {
    if (par1 === par2) {
        return "Tie, let's play again!"
    } else if (par1 === "rock" && par2 === "paper") {
        return "You lose, paper is the superior weapon against the rock for some reason";
    } else if (par1 === "paper" && par2 === "scissors") {
        return "You lose, scissors goes through paper like a sharp object";
    } else if (par1 === "scissors" && par2 === "rock") {
        return "You lose, why would you try to cut a rock?"
    } else {
        return "You win! You really are the master of the randomness!"
    }
}

const computerSelection = getComputerChoice();
const playerSelection = prompt("Rock, Paper or Scissors? Your choice: ").toLowerCase();

console.log(oneRound(playerSelection, computerSelection));