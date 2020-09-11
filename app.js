const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");

const humanScore = document.querySelector("#humanScore");
const computerScore = document.querySelector("#computerScore");

let humanCount = 0;
let computerCount = 0;

function computerPlay () {
    const options = ["rock", "paper", "scissor"];
    let ranNum = Math.floor(Math.random() * 3);
    let localComputerSelection = options[ranNum];
    return localComputerSelection;
  }
  
rock.addEventListener("click", function(){
    playRound("rock", computerPlay())
})
paper.addEventListener("click", function(){
    playRound("paper", computerPlay())
})
scissor.addEventListener("click", function(){
    playRound("scissor", computerPlay())
})

function playRound (playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "paper") {
        humanCount ++;
        humanScore.innerHTML = humanCount;
    } else if (playerSelection === "rock" && computerSelection === "scissor") {
        computerCount ++;
        computerScore.innerHTML = computerCount;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        humanCount ++;
        humanScore.innerHTML = humanCount;
    } else if (playerSelection === "paper" && computerSelection === "scissor") {
        computerCount ++;
        computerScore.innerHTML = computerCount;
    } else if (playerSelection === "scissor" && computerSelection === "paper") {
        humanCount ++;
        humanScore.innerHTML = humanCount;
    } else if (playerSelection === "scissor" && computerSelection === "rock") {
        computerCount ++;
        computerScore.innerHTML = computerCount;
    } else {
        console.log("Draw");
    }

    if(humanScore.innerHTML === "5"){
        alert("Well done! Human has won")
        humanScore.innerHTML = 0;
        computerScore.innerHTML = 0;
    } else if (computerScore.innerHTML === "5") {
        alert("Sorry, you lost!")
        humanScore.innerHTML = 0;
        computerScore.innerHTML = 0;
    }
}