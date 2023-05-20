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
// For loop to play the game til somebody wins 5 times
for (let i = 0; compCounter < 6 || userCounter < 6; i++) {
    playRound(playerSelection, computerSelection);
    console.log("The computer score is: " + compCounter);
    console.log("The user score is: " + userCounter);
}
// easy verze
if (playerSelection === computerSelection) {
    return "Tie, let's play again!"
} else if (playerSelection === "rock" && computerSelection === "paper") {
    return "You lose, paper is the superior weapon against the rock for some reason";
} else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You lose, scissors goes through paper like a sharp object";
} else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You lose, why would you try to cut a rock?"
} else {
    return "You win! You really are the master of the randomness!"
}
