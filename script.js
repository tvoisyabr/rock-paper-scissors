const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const result = document.querySelector("#result");
const p = document.createElement("p");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
};

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

function playRound(humanChoice, computerChoice) {

    if ((humanChoice === "rock" && computerChoice === "rock") || (humanChoice == "paper" && computerChoice === "paper") || (humanChoice === "scissors" && computerChoice === "scissors")) {
        p.innerText = "Tie! Try again";
    } else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice == "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
        humanScore++;
        // inner if statement
        if (humanChoice === "rock" && computerChoice === "scissors") {
            p.innerText = "You won! Rock beats Scissors. +1 Point for Human!";
        } else if (humanChoice == "paper" && computerChoice === "rock") {
            p.innerText = "You won! Paper beats Rock. +1 Point for Human!";
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            p.innerText = "You won! Scissors beats Paper. +1 Point for Human!";
        }

    } else if ((humanChoice === "rock" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "rock")) {
        computerScore++;
        // inner if statement
        if (humanChoice === "rock" && computerChoice === "paper") {
            p.innerText = "You lose! Paper beats Rock. +1 Point for Computer!";
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            p.innerText = "You lose! Scissors beats Paper. +1 Point for Computer!";
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            p.innerText = "You lose! Rock beats Scissors. +1 Point for Computer!";
        }
    }
    result.appendChild(p);
};

function checkForWinner() {

    const currentScore = document.createElement("p");
    currentScore.innerText = `Computer: ${computerScore} Human: ${humanScore}`;

    if (humanScore < 5 && computerScore < 5) {
        result.appendChild(currentScore);
    } else if (humanScore === 5) {
            const h3 = document.createElement("h3");
            h3.innerText = `Human score: ${humanScore} \nComputer score: ${computerScore} \n You are a winner!`;
            result.appendChild(h3);
            humanScore = 0;
            computerScore = 0;
            result.removeChild(p);
        } else if (computerScore === 5) {
            const h3 = document.createElement("h3");
            h3.innerText = `Human score: ${humanScore} \nComputer score: ${computerScore} \n Computer is a winner!`;
            result.appendChild(h3);
            humanScore = 0;
            computerScore = 0;
            result.removeChild(p);
        }
    };


rock.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    const humanSelection = "rock";
    playRound(humanSelection, computerSelection);
    checkForWinner();
});
paper.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    const humanSelection = "paper";
    playRound(humanSelection, computerSelection);
    checkForWinner();
});
scissors.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    const humanSelection = "scissors";
    playRound(humanSelection, computerSelection);
    checkForWinner();
});