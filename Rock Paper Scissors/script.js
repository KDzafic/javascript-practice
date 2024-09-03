const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("yourChoice");
const computerDisplay = document.getElementById("computerChoice");
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");
const winner = document.getElementById("winner");
let player = 0;
let computer = 0;

function play(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if(playerChoice === computerChoice) result = "IT'S A TIE!";
    else {
        switch(playerChoice) {
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;    
        }
    }

    playerDisplay.textContent = `You choose ${playerChoice}`;
    computerDisplay.textContent = `Computer choose ${computerChoice}`;
    winner.textContent = result;
    console.log(winner)

    winner.classList.remove("win", "lose");

    switch(result) {
        case "YOU WIN!":
            winner.classList.add("win");
            player++;
            console.log(player);
            playerScore.textContent = `You:${player}`
            break;
        case "YOU LOSE!":
            winner.classList.add("lose");
            computer++;
            console.log(computer);
            computerScore.textContent = `Computer:${computer}`
        break;
    }
}