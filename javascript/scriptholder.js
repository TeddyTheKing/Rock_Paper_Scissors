function playRound (par1, par2) {
    if (par1 === par2) {
        return "Tie. No winner or loser, let's play again!"
    } else if (par1 === "rock" && par2 === "paper") {
        compCounter++;
        return "You lose, paper is the superior weapon against the rock for some reason";
    } else if (par1 === "paper" && par2 === "scissors") {
        compCounter++;
        return "You lose, scissors goes through paper like a sharp object";
    } else if (par1 === "scissors" && par2 === "rock") {
        compCounter++;
        return "You lose, why would you try to cut a rock?"
    } else {
        userCounter++
        return "You win! You really are the master of the randomness!"
    }
}
// Score sheet
function getScore (par) {
    if (par === "Tie, let's play again!") {
        return 0;
    } else if (par === "You lose, paper is the superior weapon against the rock for some reason") {
        return 1;
    } else if (par === "You lose, scissors goes through paper like a sharp object going through paper.") {
        return 1;
    } else if (par === "You lose, why would you try to cut a rock?") {
        return 1;
    } else {
        return 2;
    }
}
// For loop to play the game til somebody wins 5 times
for (let i = 0; compCounter < 6 || userCounter < 6; i++) {
    playRound(playerSelection, computerSelection);
    console.log("The computer score is: " + compCounter);
    console.log("The user score is: " + userCounter);
}
// Fungující one round 
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
    const playerSelection = prompt("Rock, Paper or Scissors? Your choice: ").toLowerCase();
    return playerSelection;
}
// Parametres for oneRound function
const playerSelection = getPlayerSelection();
const computerSelection = getComputerChoice();
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

// Results check
console.log(playerSelection);
console.log(computerSelection);
console.log(oneRound(playerSelection, computerSelection));

//Working game
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
        do {
            let playerSelection = prompt("Rock, Paper or Scissors? Your choice: ").toLowerCase();
            let computerSelection = getComputerChoice();
            oneRound(playerSelection, computerSelection);
        } while (compCounter < 5 && userCounter < 5);
    };

    playRounds();
    // Gameover function
    if (compCounter === 4) {
        return "Computer won!"
    } else if (userCounter === 4) {
        return "You've won!"
    };
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



// Results check
/*console.log(playerSelection);
console.log(computerSelection);
//console.log(oneRound(playerSelection, computerSelection));
//console.log(oneR);*/
//console.log(userCounter);
//console.log(compCounter);

//gameOver();
