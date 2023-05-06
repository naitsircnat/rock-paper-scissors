

function getComputerChoice () {

    const randomIndex= Math.floor(Math.random()*choices.length);
    const computerChoice=choices[randomIndex];
    return computerChoice;
}

const choices=["rock","paper","scissors"];

const result=getComputerChoice();
console.log(result);









