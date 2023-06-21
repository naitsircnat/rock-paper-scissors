let userScore=0;
let computerScore=0;
let playerSelection;

const buttons=document.querySelectorAll('button');

const roundResult=document.createElement('div');
container.appendChild(roundResult);

const roundScore=document.createElement('div');
container.appendChild(roundScore);

const finalResult=document.createElement('div');
container.appendChild(finalResult);

buttons.forEach((button)=>{
    button.addEventListener('click', () => {
    playerSelection=button.id;
    playRound();
    });
});

const buttonRock=document.getElementById("rock");
const buttonPaper=document.getElementById("paper");
const buttonScissors=document.getElementById("scissors");



function playRound() {

        function getComputerChoice () {
            const randomIndex= Math.floor(Math.random()*choices.length);
            const computerChoice=choices[randomIndex];
            return computerChoice;
        }

        const choices=["rock","paper","scissors"];
        const computerSelection=getComputerChoice(); 
        console.log(computerSelection); 
        
        /* player inputs and playing of round */

            if (playerSelection==="rock") {
                if (computerSelection==="paper") {
                    roundResult.textContent="You lose the round! Paper beats rock."
                } else if (computerSelection==="scissors") {
                    roundResult.textContent="You win the round! Rock beats scissors."
                } else if (computerSelection==="rock"){
                    roundResult.textContent="Draw! Rock vs rock."
                }
            }   
            
            else if (playerSelection==="paper"){
                if (computerSelection==="paper") {
                    roundResult.textContent="Draw! Paper vs paper."
                } else if (computerSelection==="scissors") {
                    roundResult.textContent="You lose the round! Scissors beats paper."
                } else if (computerSelection==="rock")
                    roundResult.textContent="You win the round! Paper beats rock."
            }
            
            else if (playerSelection==="scissors"){
                if (computerSelection==="paper") {
                    roundResult.textContent="You win the round! Scissors beats paper."
                } else if (computerSelection==="scissors") {
                    roundResult.textContent="Draw! Scissors vs scissors."
                } else if (computerSelection==="rock")
                    roundResult.textContent="You lose the round! Rock beats scissors."
            }            
    
        if (roundResult.textContent.includes("win")){
            userScore++;
        } else if (roundResult.textContent.includes("lose")){
            computerScore++;
        }

        roundScore.textContent="Player " + userScore + " | Computer " + computerScore; 

        if (userScore===5) {
            finalResult.textContent="YOU'RE THE WINNER!"
        } else if (computerScore===5){
            finalResult.textContent="COMPUTER WINS! TRY AGAIN."
        }
        
        if (userScore===5 || computerScore===5){
            buttonRock.disabled=true;
            buttonPaper.disabled=true;
            buttonScissors.disabled=true;
        }   
    }
    
    


    
