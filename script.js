console.log("Hello World!")

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if(randomNumber === 0) {return "rock";}
    if(randomNumber === 1) {return "paper";}
    if(randomNumber === 2) {return "scissors";}
}

function getHumanChoice() {
    let userInput = prompt("What's your choice?").trim().toLowerCase();
    if(userInput === "rock" || userInput === "paper" || userInput === "scissors") {return userInput;}
    else {alert("Input Error."); return "Error";}
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        console.log(`You chose: ${humanChoice}`);
        console.log(`Computer chose: ${computerChoice}`);

        if(humanChoice === "Error") {console.log("Round skipped due to invalid input."); return "Round skipped due to invalid input.";}
        if(humanChoice === computerChoice) {return "Draw"}
        if(
            (humanChoice === "rock"     && computerChoice === "scissors")||
            (humanChoice === "paper"    && computerChoice === "rock"    )||
            (humanChoice === "scissors" && computerChoice === "paper"   )
        ) {humanScore ++; console.log(`Score - Human: ${humanScore}, Computer: ${computerScore}`); return("human wins!"); }
        else{computerScore ++; console.log(`Score - Human: ${humanScore}, Computer: ${computerScore}`); return "Computer Wins!";}
    }

    for (let i = 0; i < 5; i++){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        console.log(`You chose: ${humanChoice}.\nComputer chose: ${computerChoice}`)
        console.log(playRound(humanChoice, computerChoice))
    }

    console.log(`Final Scores:\nYour score: ${humanScore}\nComputer Score: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("You won the game!");
    } else if (computerScore > humanScore) {
        console.log("Computer won the game!");
    } else {
        console.log("The game is a tie!");
    }    
}

playGame();

//testing:
console.log("You reached the end!");