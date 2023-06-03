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
    /*function getPlayerSelection() {
        let playerSelection = prompt("Rock, Paper or Scissors? Your choice: ").toLowerCase();
        return playerSelection;
    }*/

// Function for the gameplay
//function game () {

    // Parametres for oneRound function
    //let playerSelection = prompt("Rock, Paper or Scissors? Your choice: ").toLowerCase();
    //let computerSelection = getComputerChoice();

    // Score counter
    let compCounter = 0;
    let userCounter = 0;
    // Function that plays 1 round of paper, rock, scissors
    function oneRound(playerSelection, computerSelection) {
        if (playerSelection === computerSelection) {
            console.log(`It's a draw. PlayerScore ${userCounter} : ComputerScore ${compCounter}`);
        } else if (playerSelection === "rock" && computerSelection === "paper") {
            console.log(`PlayerScore: ${userCounter} : ComputerScore ${++compCounter}`);
        } else if (playerSelection === "paper" && computerSelection === "scissors") {
            console.log(`PlayerScore: ${userCounter} : ComputerScore ${++compCounter}`);
        } else if (playerSelection === "scissors" && computerSelection === "rock") {
            console.log(`PlayerScore: ${userCounter} : ComputerScore ${++compCounter}`);
        } else {
            console.log(`PlayerScore: ${++userCounter} : ComputerScore ${compCounter}`);
        }
    }

    function playRounds() {
        for (let i = 0; i < 5; i++) {
            let playerSelection = prompt("Rock, Paper or Scissors? Your choice: ").toLowerCase();
            let computerSelection = getComputerChoice();
            oneRound(playerSelection, computerSelection);
            console.log(playerSelection);
            console.log(computerSelection);
        }
    }

    playRounds();

    // Value of one round stored in variable
    //const oneR = oneRound(playerSelection, computerSelection);
    // Score counter
    //let compCounter = 0;
  //  let userCounter = 0;

    /*function counter(oneR) {
        if (oneR === 0) {
            return "Draw";
        } else if (oneR === 1) {
            compCounter++;
            return compCounter;
        } else {
            userCounter++;
            return userCounter;
        };
    };*/

    //counter(oneR);

    /*function forLoop(compCounter, userCounter) {
        if (compCounter < 6 && userCounter < 6) {
            for (let i = 0; i < compCounter)
        }
    }*/

    // Do while loop try
    /*function doWhile() {
        do {
            getComputerChoice();
            getPlayerSelection();
            oneRound(playerSelection, computerSelection);
            counter(oneR);
        } while (compCounter < 6 && userCounter < 6);
    }*/
    //doWhile();



// For loop try
    /*for (let i = 0; compCounter < 6 || userCounter < 6; i++) {
        oneRound(playerSelection, computerSelection);
    };

    if (compCounter === 5) {
        console.log("Computer wins!");
    } else if (userCounter === 5) {
        console.log("You won!")
    }*/

//}   

//}

    // Gameover function
    /*function gameOver() {
        if (compCounter === 5) {
            return "Computer won!"
        } else if (userCounter === 5) {
            return "You've won!"
        } else {
            getComputerChoice();
            getPlayerSelection();
            oneRound(playerSelection, computerSelection);
            counter(oneR);
        }
    }*/

// Results check
/*console.log(playerSelection);
console.log(computerSelection);
//console.log(oneRound(playerSelection, computerSelection));
//console.log(oneR);
console.log(userCounter);
console.log(compCounter);*/

//gameOver();
