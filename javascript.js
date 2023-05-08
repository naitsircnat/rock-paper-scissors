let userScore=0;
let computerScore=0;

function game() {
    
    for (let i=0; i<5; i++) {
        function getComputerChoice () {
            const randomIndex= Math.floor(Math.random()*choices.length);
            const computerChoice=choices[randomIndex];
            return computerChoice;
        }

        const choices=["rock","paper","scissors"];

        const computerSelection=getComputerChoice(); 

        console.log(computerSelection); 

        /* player inputs and playing of round */

        let playerSelection = prompt("Rock, paper or scissors?", "rock").toLowerCase();

        function playRound(playerSelection, computerSelection){
            if (playerSelection==="rock") {
                if (computerSelection==="paper") {
                    return "You lose! Paper beats rock."
                } else if (computerSelection==="scissors") {
                    return "You win! Rock beats scissors."
                } else if (computerSelection==="rock"){
                    return "Draw! Rock vs rock."
                }
            }   
            
            else if (playerSelection==="paper"){
                if (computerSelection==="paper") {
                    return "Draw! Paper vs paper."
                } else if (computerSelection==="scissors") {
                    return "You lose! Scissors beats paper."
                } else if (computerSelection==="rock")
                    return "You win! Paper beats rock."
            }
            
            else if (playerSelection==="scissors"){
                if (computerSelection==="paper") {
                    return "You win! Scissors beats paper."
                } else if (computerSelection==="scissors") {
                    return "Draw! Scissors vs scissors."
                } else if (computerSelection==="rock")
                    return "You lose! Rock beats scissors."
            }
        }
        
        console.log(playRound(playerSelection,computerSelection)); 
        
        let resultString = playRound(playerSelection,computerSelection);
        
        if (resultString.includes("win")){
            userScore++;
        } else if (resultString.includes("lose")){
            computerScore++;
        }
}   }

game();

console.log("You scored " + userScore);
console.log("The computer scored " + computerScore);

if (userScore > computerScore) {
    console.log("YOU WIN THIS GAME!");
} else if (userScore < computerScore) {
    console.log("YOU LOSE THIS GAME!");
} else {
    console.log("IT'S A TIE!");
}
