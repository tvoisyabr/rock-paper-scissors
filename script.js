// Create a function that doesn't accept any parameters
// Create an array that stores 3 values (rock, paper, scissors)
// Make computer randomly chose one of the values form the array
// Store the value into variable as a result
// Make the function return the value

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
};

// Create a function that doesn't accept any parameters
// Make the function accept input form a user
// Make sure user prompts rock, paper or scissors (ignoring case sensitivity)
// Store input form the user to a variable
// Return user's input

function getHumanChoice() {

    let humanChoice;
    let flag = false;
    while (!flag) {
        humanChoice = prompt("Rock, Paper, Scissors. What's your choice?");
        humanChoice = humanChoice.toLowerCase();

        if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
            flag = true;
            break;
        }
    }
    return humanChoice;
};

// Create 2 variables to store human and computer score
let humanScore = 0;
let computerScore = 0;

// Create a function to play a single round
// Function must accept 2 parameters - human choice and computer choice as input
// Indicate who is a winner
// Wright output message based on a winner
// Increment human and computer scores based on a winner

const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();

function playRound(humanChoice, computerChoice) {


    // if human chose rock and computer chose scissors HUMAN +
    // if human chose rock and computer chose paper COMP +
    // if human chose rock and computer chose rock TIE

    // if human chose paper and computer chose rock HUMAN +
    // if human chose paper and computer chose scissors COMP +
    // if human chose paper and computer chose paper TIE

    // if human chose scissors and computer chose paper HUMAN +
    // if human chose scissors and computer chose rock COMP +
    // if human chose scissors and computer chose scissors TIE

    if ((humanChoice === "rock" && computerChoice === "rock") || (humanChoice == "paper" && computerChoice === "paper") || (humanChoice === "scissors" && computerChoice === "scissors")) {
        console.log("Tie! Try again");
    } else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice == "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
        humanScore++;
        // inner if statement
        if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log("You lose! Rock beats Scissors");
        } else if (humanChoice == "paper" && computerChoice === "rock") {
            console.log("You lose! Paper beats Rock");
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log("You lose! Scissors beats Paper");
        }

    } else if ((humanChoice === "rock" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "rock")) {
        computerScore++;
        // inner if statement
        if (humanChoice === "rock" && computerChoice === "paper") {
            console.log("You lose! Paper beats Rock");
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            console.log("You lose! Scissors beats Paper");
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            console.log("You lose! Rock beats Scissors");
        }
    }
};


