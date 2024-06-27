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