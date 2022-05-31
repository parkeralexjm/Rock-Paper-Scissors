function computerPlay {
    // Create a random integer from 0 to 8
    let computerPick = Math.floor(Math.random() * 8)
    if (computerPick < 3) {
        // If 0,1,2 return Rock
        return "Rock"
    } else if (computerPick > 5) {
        // If 6,7,8 return Scissors
        return "Scissors" 
    } else {
        // If 3,4,5 return Paper
        return "Paper"
    }

}