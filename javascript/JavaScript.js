    // Computer choice by random number
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
// Player choice by prompt
    function getPlayerSelection () {
        let playerSelection = prompt("Rock, Paper or Scissors? Your choice: ").toLowerCase();
        return playerSelection;
    }

// Function for the gameplay
//function game () {

// Parametres for oneRound function
    const playerSelection = getPlayerSelection();
    const computerSelection = getComputerChoice();
// Function that plays 1 round of paper, rock, scissors
    function oneRound (playerSelection, computerSelection) {
        if (playerSelection === computerSelection) {
            return 0;
        } else if (playerSelection === "rock" && computerSelection === "paper") {
            return 1;
        } else if (playerSelection === "paper" && computerSelection === "scissors") {
            return 1;
        } else if (playerSelection === "scissors" && computerSelection === "rock") {
            return 1;
        } else {
            return 2;
        }
    }

    //console.log(scoreKeeper());
    const oneR = oneRound(playerSelection, computerSelection);
    if (oneR === 2) {
        console.log("You win");
    } else {
        console.log("You did not win")
    }
    /*
    console.log("The computer score is: " + compCounter);
    console.log("The user score is: " + userCounter);

    for (let i = 0; compCounter < 6 || userCounter < 6; i++) {
        oneRound(playerSelection, computerSelection);
    };

    if (compCounter === 5) {
        console.log("Computer wins!");
    } else if (userCounter === 5) {
        console.log("You won!")
    }*/

//}   
//function scoreKeeper (oneRound) {
   /* let userCounter = 0;
    let compCounter = 0;

    if (oneR === 1) {
        ++compCounter;
    } else if (oneR === 2) {
        ++userCounter;
    } else {
        // Do nothing
    };

    console.log(userCounter);
    console.log(compCounter);*/
//}

//console.log(game());
//console.log(scoreKeeper());
// Results check
console.log(playerSelection);
console.log(computerSelection);
console.log(oneRound(playerSelection, computerSelection));
console.log(oneR);