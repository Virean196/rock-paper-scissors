let buttonArea = document.getElementById("buttonArea");
let rockBtn = document.getElementById("rockBtn");
let paperBtn = document.getElementById("paperBtn");
let scissorsBtn = document.getElementById("scissorsBtn");
let score = document.getElementById("score");
let choices = document.getElementById("choices");
let playerScore = 0, computerScore = 0;
let roundWinner;
let playersChoice;

var playerChoiceImg = document.createElement("img");
var computerChoiceImg = document.createElement("img");
var vsImg = document.createElement("img");
vsImg.src=("./resources/images/vs.png");
vsImg.classList.add("vsBtn");

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    switch (randomNumber) {
        case 1:
            computerChoiceImg.src = "./resources/images/rock.png"
            return "Rock";
        case 2:
            computerChoiceImg.src = "./resources/images/paper.png"
            return "Paper";
        case 3:
            computerChoiceImg.src = "./resources/images/scissors.png"
            return "Scissors";
    }
}

function playRound(playersChoice, computersChoice) {
    if (playersChoice.toLowerCase() == "scissors" && computersChoice == "paper") {
        console.log("You win! " + playersChoice.charAt(0).toUpperCase() + playersChoice.slice(1) + " beats " + computersChoice);
        roundWinner = "player";
        return roundWinner;
    }
    else if (playersChoice.toLowerCase() == "paper" && computersChoice.toLowerCase() == "rock") {
        console.log("You win! " + playersChoice.charAt(0).toUpperCase() + playersChoice.slice(1) + " beats " + computersChoice);
        roundWinner = "player";
        return roundWinner;
    }
    else if (playersChoice.toLowerCase() == "rock" && computersChoice.toLowerCase() == "scissors") {
        console.log("You win! " + playersChoice.charAt(0).toUpperCase() + playersChoice.slice(1) + " beats " + computersChoice);
        roundWinner = "player";
        return roundWinner;
    }
    else if (playersChoice.toLowerCase() == computersChoice.toLowerCase()) {
        console.log("Its a tie!");
        roundWinner = "tie";
        return roundWinner;
    }
    else {
        console.log("You lose! " + computersChoice + " beats " + playersChoice.charAt(0).toUpperCase() + playersChoice.slice(1));
        roundWinner = "computer";
        return roundWinner;
    }
}

function round() {
    playRound(playersChoice, getComputerChoice());
    choices.appendChild(playerChoiceImg);
    choices.appendChild(vsImg);
    choices.appendChild(computerChoiceImg);
    playerChoiceImg.classList.add("gameButtons");
    computerChoiceImg.classList.add("gameButtons");
    if (roundWinner == "player") {
        playerScore++;
    }
    else if (roundWinner == "computer") {
        computerScore++;
    }
    console.log("Player score: " + playerScore);
    console.log("Computer Score: " + computerScore);
    if (playerScore > computerScore) {
        console.log("Player wins " + playerScore + " - " + computerScore);
    }
    else if (computerScore > playerScore) {
        console.log("Computer wins " + computerScore + " - " + playerScore);
    }
    else {
        console.log("Its a draw " + playerScore + " - " + computerScore);
    }
    checkScore();
}

function checkScore() {
    score.innerText = (playerScore + " : " + computerScore);
    if (playerScore == 5) {
        score.innerText = ("Player Wins!");
        rockBtn.onclick = resetScore();
        paperBtn.onclick = resetScore();
        scissorsBtn.onclick = resetScore();
    }
    else if (computerScore == 5) {
        score.innerText = ("Computer Wins!");
        rockBtn.onclick = resetScore();
        paperBtn.onclick = resetScore();
        scissorsBtn.onclick = resetScore();
    }
}

function resetScore() {
    playerScore = 0;
    computerScore = 0;
}

rockBtn.addEventListener('click', function () {
    playersChoice = "rock";
    round();
    playerChoiceImg.src = "./resources/images/rock.png"
    return playersChoice;
})


paperBtn.addEventListener('click', function () {
    playersChoice = "paper";
    round();
    playerChoiceImg.src = "./resources/images/paper.png"
    return playersChoice;
})

scissorsBtn.addEventListener('click', function () {
    playersChoice = "scissors";
    round();
    playerChoiceImg.src = "./resources/images/scissors.png"
    return playersChoice;
})