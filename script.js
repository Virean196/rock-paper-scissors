let buttonArea = document.getElementById("buttonArea");
let rockBtn = document.getElementById("rockBtn");
let paperBtn = document.getElementById("paperBtn");
let scissorsBtn = document.getElementById("scissorsBtn");
let score = document.getElementById("score");
let choices = document.getElementById("choices");
let test = document.getElementById("test");
let playerScore = 0, computerScore = 0;
let roundWinner;
let playersChoice;

function getComputerChoice(){
    const randomNumber = Math.floor(Math.random()*3) + 1;
    switch (randomNumber){
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    }
}

function playRound(playersChoice, computersChoice){
    choices.innerHTML = "<h1>" + playersChoice.charAt(0).toUpperCase() + playersChoice.slice(1) + " vs " + computersChoice + "</h1>"
    // choices.appendChild(playerImg);
    // choices.appendChild(computerImg);
    console.log(playersChoice.charAt(0).toUpperCase() + playersChoice.slice(1) + " vs " + computersChoice);
    if(playersChoice.toLowerCase() == "scissors" && computersChoice == "paper"){
        console.log("You win! " + playersChoice.charAt(0).toUpperCase() + playersChoice.slice(1) + " beats " + computersChoice);
        roundWinner = "player";
        return roundWinner;
    }
    else if(playersChoice.toLowerCase() == "paper" && computersChoice.toLowerCase() == "rock"){
        console.log("You win! " + playersChoice.charAt(0).toUpperCase() + playersChoice.slice(1) + " beats " + computersChoice);
        roundWinner = "player";
        return roundWinner;
    }
    else if(playersChoice.toLowerCase() == "rock" && computersChoice.toLowerCase() == "scissors"){
        console.log("You win! " + playersChoice.charAt(0).toUpperCase() + playersChoice.slice(1) + " beats " + computersChoice);
        roundWinner = "player";
        return roundWinner;
    }
    else if(playersChoice.toLowerCase() == computersChoice.toLowerCase()){
        console.log("Its a tie!");
        roundWinner = "tie";
        return roundWinner;
    }
    else{
        console.log("You lose! " + computersChoice + " beats " + playersChoice.charAt(0).toUpperCase() + playersChoice.slice(1));
        roundWinner = "computer";
        return roundWinner;
    }
}

function round(){
    playRound(playersChoice, getComputerChoice());
    if(roundWinner == "player"){
        playerScore++;
    }
    else if(roundWinner == "computer"){
        computerScore++;
    }
    console.log("Player score: " + playerScore);
    console.log("Computer Score: " + computerScore);
    if(playerScore>computerScore){
        console.log("Player wins " + playerScore + " - " + computerScore);
    }
    else if(computerScore>playerScore){
        console.log("Computer wins " + computerScore + " - " + playerScore);
    }
    else{
        console.log("Its a draw " + playerScore + " - " + computerScore);
    }
    checkScore();
}

function checkScore(){
    score.innerText = (playerScore + " : " + computerScore);
    if (playerScore == 5){
        score.innerText = ("Player Wins!");
        rockBtn.onclick = resetScore();
        paperBtn.onclick = resetScore();
        scissorsBtn.onclick = resetScore();
    }
    else if(computerScore == 5){
        score.innerText = ("Computer Wins!");
        rockBtn.onclick = resetScore();
        paperBtn.onclick = resetScore();
        scissorsBtn.onclick = resetScore();
    }
}

function resetScore(){
    playerScore = 0;
    computerScore = 0;
}

rockBtn.addEventListener('click', function(){
    playersChoice = "rock";
    round();
    return playersChoice;
})

paperBtn.addEventListener('click', function(){
    playersChoice = "paper";
    round();
    return playersChoice;
})

scissorsBtn.addEventListener('click', function(){
    playersChoice = "scissors";
    round();
    return playersChoice;
})