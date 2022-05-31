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

function playRound (playerChoice, computerSelection) {
    if (playerChoice == computerSelection) {
        // If the selections are the same, return a draw
        console.log("draw " + playerChoice + " ties with " + computerSelection);
    } else if ( (playerChoice == "rock" && computerSelection == "scissors") || 
                (playerChoice == "scissors" && computerSelection == "paper") ||
                (playerChoice == "paper" && computerSelection == "rock") ) {
        // If the selections are a win for the player
        console.log("win " + playerChoice + " beats " + computerSelection)
    } else {
        // If the selections are a loss for the player
        console.log("lose " + computerSelection + " beats " + playerChoice)
    }
}

function game () {
    for (let i = 0; i < 5; i++){
        playerSelection()
        computerSelection = computerPlay()
        playRound(playerChoice, computerSelection)
    }
}

function playerSelection () {
    // Update the player selection
    playerChoice = prompt("Please select Rock, Paper or Scissors: ").toLowerCase();
}

// Get input from the user to select rock, paper or scissors and change it to lowercase
let playerChoice = prompt("Please select Rock, Paper or Scissors: ").toLowerCase();
// Use the computerplay function to randomly select the computer choice
let computerSelection = computerPlay();