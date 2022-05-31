function computerPlay() {
    // Create a random integer from 0 to 8
    let computerPick = Math.floor(Math.random() * 8)
    if (computerPick < 3) {
        // If 0,1,2 return rock
        return "rock"
    } else if (computerPick > 5) {
        // If 6,7,8 return scissors
        return "scissors" 
    } else {
        // If 3,4,5 return paper
        return "paper"
    }
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        // If the selections are the same, return a draw
        console.log(computerSelection)
        console.log(playerSelection)
        return "draw"
    } else if ( (playerSelection == "rock" && computerSelection == "scissors") || 
                (playerSelection == "scissors" && computerSelection == "paper") ||
                (playerSelection == "paper" && computerSelection == "rock") ) {
        // If the selections are a win for the player
        return "win"
    } else {
        // If the selections are a loss for the player
        return "lose"
    }
}

// Get input from the user to select rock, paper or scissors and change it to lowercase
const playerSelection = prompt("Please select Rock, Paper or Scissors: ").toLowerCase();
// Use the computerplay function to randomly select the computer choice
const computerSelection = computerPlay();