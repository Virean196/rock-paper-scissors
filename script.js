let roundWinner;

function getComputerChoice(){
    const randomNumber = Math.floor(Math.random()*3) + 1;
    switch (randomNumber){
        case 1:
            return "Rock";
            break;
        case 2:
            return "Paper";
            break;
        case 3:
            return "Scissors";
            break;
    }
}

function playRound(playersChoice, computersChoice){
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

function game(){
    let playerScore = 0, computerScore = 0;
    for(let i = 0; i<5; i++){
        let playersChoise = prompt("Choose rock, paper or scissors!");
        playRound(playersChoise, getComputerChoice());
        if(roundWinner == "player"){
            playerScore++;
        }
        else if(roundWinner == "computer"){
            computerScore++;
        }
        console.log("Player score: " + playerScore);
        console.log("Computer Score: " + computerScore);
    }
    if(playerScore>computerScore){
        console.log("Player wins " + playerScore + " - " + computerScore);
    }
    else if(computerScore>playerScore){
        console.log("Computer wins " + computerScore + " - " + playerScore);
    }
    else{
        console.log("Its a draw " + playerScore + " - " + computerScore);
    }
}

game();