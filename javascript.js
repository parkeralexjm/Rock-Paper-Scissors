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

const container = document.querySelector('#container');

function playRound (playerChoice, computerSelection) {
    if (playerChoice == computerSelection) {
        // If the selections are the same, return a draw
        const draw = document.createElement('div');
        draw.textContent =  ("You draw! " + playerChoice + " ties with " + computerSelection + 
        ". Player: " + playerScore + " Computer: " + computerScore);
        container.appendChild(draw);
    } else if ( (playerChoice == "rock" && computerSelection == "scissors") || 
                (playerChoice == "scissors" && computerSelection == "paper") ||
                (playerChoice == "paper" && computerSelection == "rock") ) {
        // If the selections are a win for the player
        playerScore ++;
        const win = document.createElement('div');
        win.textContent =  ("You win! " + playerChoice + " beats " + computerSelection + 
        ". Player: " + playerScore + " Computer: " + computerScore);
        container.appendChild(win);
    } else {
        // If the selections are a loss for the player
        computerScore++;
        const lose = document.createElement('div');
        lose.textContent =  ("You lose! " + computerSelection + " beats " + playerChoice + 
        ". Player: " + playerScore + " Computer: " + computerScore);
        container.appendChild(lose);
    }
    if (playerScore == 5){
        const winner = document.createElement('div');
        winner.textContent =  ("You're the winner!");
        container.appendChild(winner);
    }
    if (computerScore == 5){
        const loser = document.createElement('div');
        loser.textContent =  ("You're the loser!");
        container.appendChild(loser);
    }
}

function game () {
        playerSelection()
        computerSelection = computerPlay()
        playRound(playerChoice, computerSelection)
    
}

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    playerChoice = button.id;
    playRound(playerChoice, computerPlay())
  });
});

function playerSelection () {
    // Update the player selection
   playerChoice = buttons.id;
}

// Get input from the user to select rock, paper or scissors and change it to lowercase
let playerChoice;
// Use the computerplay function to randomly select the computer choice
let computerSelection = computerPlay();

let computerScore = 0;
let playerScore = 0;