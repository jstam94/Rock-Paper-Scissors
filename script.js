let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection){
    let computerRoll = () =>{
        let possibleChoices = ['Rock', 'Paper', 'Scissors'];
        let computerChoice = possibleChoices[Math.floor(Math.random() * 3)];
        return computerChoice;
    }

    let computerSelection = computerRoll();

    roundWin = () => {
        playerScore += 1;
        return `Round Win! ${playerSelection} beats ${computerSelection}.`;
    }
    roundLoss = () => {
        computerScore +=1;
        return `Round Lossgi :(! ${computerSelection} beats ${playerSelection}.`
     }
    roundDraw = () =>{
        return `It's a draw!!!`;
     }
    
    if (playerSelection === computerSelection){
        return roundDraw();
    } else if (playerSelection === 'Rock'){
        if (computerSelection === 'Scissors'){
        return roundWin();
        } else return roundLoss();
    } else if (playerSelection === 'Paper'){
        if (computerSelection === 'Rock'){
        return roundWin();
        } else return roundLoss();
    } else if (playerSelection === 'Scissors'){
        if (computerSelection === 'Paper'){
        return roundWin();
        } else {
             return roundLoss();}
        }
    }

let roundResults = document.querySelector('#round-result')
let gameResults = document.querySelector('#game-results')
let buttons = document.querySelectorAll('#buttons button')
console.log(buttons)

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        roundResults.textContent = playRound(button.textContent);
        gameResults.textContent = `Current Score is ${playerScore} - ${computerScore}`;
        evaluateScore();
})})


function evaluateScore(){
    if(playerScore == 5){
        gameResults.textContent = `PLAYER WINS!!! xD Final score is ${playerScore} - ${computerScore}. Refresh to play again`;
    } else if(computerScore == 5){
        gameResults.textContent = `player loses :'( Final score is ${playerScore} - ${computerScore}. Refresh to play again`;
    }
}