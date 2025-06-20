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

let humanScore = 0;
let computerScore = 0;
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playRound(humanChoice, computerChoice) {
    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);
    console.log(`Score - Human: ${humanScore}, Computer: ${computerScore}`);

    if(humanChoice === "Error") {console.log("Round skipped due to invalid input."); return "Round skipped due to invalid input.";}
    if(humanChoice === computerChoice) {return "Draw"}
    if(humanChoice === "rock"     && computerChoice === "scissors") {humanScore    ++; console.log("Human wins");    return("human wins");   }
    if(humanChoice === "rock"     && computerChoice === "paper"   ) {computerScore ++; console.log("Computer wins"); return("Computer wins");}
    if(humanChoice === "paper"    && computerChoice === "scissors") {computerScore ++; console.log("Computer wins"); return("Computer wins");}
    if(humanChoice === "paper"    && computerChoice === "rock"    ) {humanScore    ++; console.log("Human wins");    return("human wins");   }
    if(humanChoice === "scissors" && computerChoice === "rock"    ) {computerScore ++; console.log("Computer wins"); return("Computer wins");}
    if(humanChoice === "scissors" && computerChoice === "paper"   ) {humanScore    ++; console.log("Human wins");    return("human wins");   }
}
playRound(humanSelection, computerSelection);

function playGame() {
    
}

//testing:
console.log("You reached the end!");