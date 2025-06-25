console.log("Hello World!")

const scorePlayer = document.querySelector(".score-player")
const scoreComputer = document.querySelector(".score-computer")
const scoreRound = document.querySelector(".score-rounds")
const gameStatus = document.querySelector(".game-status-text")
const userButtons = document.querySelectorAll(".user-button")

let humanScore = 0;
let computerScore = 0;
let roundCount = 0;

// Get a random choice for the computer: rock, paper, or scissors
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if(randomNumber === 0) {return "rock";}
    if(randomNumber === 1) {return "paper";}
    if(randomNumber === 2) {return "scissors";}
}

// Determine the outcome of a single round and update score
function playRound(playerChoice, computerChoice) {
    if(playerChoice === computerChoice) {return "Draw"}
    if(
        (playerChoice === "rock"     && computerChoice === "scissors")||
        (playerChoice === "paper"    && computerChoice === "rock"    )||
        (playerChoice === "scissors" && computerChoice === "paper"   )
    ) {
        humanScore ++;
        console.log(`Score - Human: ${humanScore}, Computer: ${computerScore}`);
        return "Human wins!";
    } else {
        computerScore ++;
        console.log(`Score - Human: ${humanScore}, Computer: ${computerScore}`);
        return "Computer Wins!";
    }
}

// Handle each button click:
function playHandler(event) {
    //initialize items
    const button = event.currentTarget;
    const playerChoice = button.dataset.choice;
    const computerChoice = getComputerChoice();
    const result = playRound(playerChoice, computerChoice);

    //update items per round
    roundCount++;
    scorePlayer.textContent = humanScore;
    scoreComputer.textContent = computerScore;
    scoreRound.textContent = roundCount;
    gameStatus.textContent = result;

    //check for endgame
    if (humanScore >= 5 || computerScore >= 5) {
        endGame();
    }
}

// End the game: show final message and convert buttons to restart
function endGame() {
    // Set final status
    if (humanScore > computerScore) {
        gameStatus.textContent = "Game Over: You Win!";
    } else {
        gameStatus.textContent = "Game Over: Computer Wins!";
    }

    // Change buttons to "Restart"
    userButtons.forEach(button => {
        button.textContent = "Restart";
        button.removeEventListener("click", playHandler);
        button.addEventListener("click", restartGame);
    });
}

// Restart game:
function restartGame() {
    //reset score
    humanScore = 0;
    computerScore = 0;
    roundCount = 0;

    //reset stats
    scorePlayer.textContent = 0;
    scoreComputer.textContent = 0;
    scoreRound.textContent = 0;
    gameStatus.textContent = "Ongoing.";

    //when clicked
    userButtons.forEach(button => {
        //restore button text
        const choice = button.dataset.choice;
        button.textContent = choice;

        //disable buttons
        button.removeEventListener("click", restartGame);
        button.addEventListener("click", playHandler);
    });
}

//start game
userButtons.forEach(button => {
    button.addEventListener("click", playHandler);
});

//testing:
console.log("You reached the end!");