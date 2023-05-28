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
    // Player choice by prompt
    function getPlayerSelection() {
        let playerSelection = prompt("Rock, Paper or Scissors? Your choice: ").toLowerCase();
        return playerSelection;
    }

// Function for the gameplay
//function game () {

    // Parametres for oneRound function
    const playerSelection = getPlayerSelection();
    const computerSelection = getComputerChoice();
    // Function that plays 1 round of paper, rock, scissors
    function oneRound(playerSelection, computerSelection) {
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

    // Value of one round stored in variable
    const oneR = oneRound(playerSelection, computerSelection);
    // Score counter
    let compCounter = 0;
    let userCounter = 0;

    function counter(oneR) {
        if (oneR === 0) {
            return "Draw";
        } else if (oneR === 1) {
            compCounter++;
            return compCounter;
        } else {
            userCounter++;
            return userCounter;
        };
    };

    counter(oneR);

    /*function forLoop(compCounter, userCounter) {
        if (compCounter < 6 && userCounter < 6) {
            for (let i = 0; i < compCounter)
        }
    }*/

    // Do while loop
    /*function doWhile() {
        do {
            getComputerChoice();
            getPlayerSelection();
            oneRound(playerSelection, computerSelection);
            counter(oneR);
        } while (compCounter < 6 && userCounter < 6);
    }*/

    //doWhile();
    // Endgame

    /*if (compCounter = 5) {
        console.log("Computer won!")
    } else if (userCounter = 5) {
        console.log("You've won!")
    }*/
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

//}

//console.log(game());

// Results check
console.log(playerSelection);
console.log(computerSelection);
console.log(oneRound(playerSelection, computerSelection));
console.log(oneR);
console.log(userCounter);
console.log(compCounter);