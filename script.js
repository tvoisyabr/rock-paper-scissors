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
    while(!flag) {
        humanChoice = prompt("Rock, Paper, Scissors. What's your choice?");
        humanChoice = humanChoice.toLowerCase();

        if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
            flag = true;
            break;
        }
    }
    return humanChoice;
};

