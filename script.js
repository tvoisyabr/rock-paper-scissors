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

// Create a function to play a single round
// Function must accept 2 parameters - human choice and computer choice as input
// Indicate who is a winner
// Wright output message based on a winner
// Increment human and computer scores based on a winner


// Play game 5 rounds
// Evaluate a winner
// Display a user and computer score

function playGame() {
    // Create 2 variables to store human and computer score
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice) {

        if ((humanChoice === "rock" && computerChoice === "rock") || (humanChoice == "paper" && computerChoice === "paper") || (humanChoice === "scissors" && computerChoice === "scissors")) {
            console.log("Tie! Try again");
        } else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice == "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
            humanScore++;
            // inner if statement
            if (humanChoice === "rock" && computerChoice === "scissors") {
                console.log("You lose! Rock beats Scissors. +1 Point for Human!");
            } else if (humanChoice == "paper" && computerChoice === "rock") {
                console.log("You lose! Paper beats Rock. +1 Point for Human!");
            } else if (humanChoice === "scissors" && computerChoice === "paper") {
                console.log("You lose! Scissors beats Paper. +1 Point for Human!");
            }

        } else if ((humanChoice === "rock" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "rock")) {
            computerScore++;
            // inner if statement
            if (humanChoice === "rock" && computerChoice === "paper") {
                console.log("You lose! Paper beats Rock. +1 Point for Computer!");
            } else if (humanChoice === "paper" && computerChoice === "scissors") {
                console.log("You lose! Scissors beats Paper. +1 Point for Computer!");
            } else if (humanChoice === "scissors" && computerChoice === "rock") {
                console.log("You lose! Rock beats Scissors. +1 Point for Computer!");
            }
        }
    }

    //play game for 5 rounds
    let round = 1;
    while (round <= 5) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        round++;
    }

    console.log(`Human score: ${humanScore}\nComputer score: ${computerScore}`);
};

playGame();