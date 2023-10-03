function roundWin(){
    playerScore += 1;
    return `You Win! ${playerSelection} beats ${computerSelection}.`;
}
function roundLoss(){
    computerScore +=1;
    return `You Lose :(! ${playerSelection} beats ${computerSelection}.`
}
function roundDraw(){
    return `It's a draw!!!`;
}

function getComputerChoice() {
    let possibleChoices = ['Rock', 'Paper', 'Scissors'];
    let computerChoice = possibleChoices[Math.floor(Math.random() * 3)];
    return computerChoice;
}

function firstLetterCap(string) {
    string = string.toLowerCase();
    let firstLetter = (string.charAt(0)).toUpperCase();
    let endOfWord =  string.slice(1, string.length)
    let normalString = firstLetter + endOfWord
    return normalString;
}

function playRound(playerSelection, computerSelection){
    playerSelection = firstLetterCap(playerSelection);
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
        } else return roundLoss();
    }
}

let computerSelection = getComputerChoice();
let playerSelection = prompt('Rock, Paper or Scissors? ;D')
let playerScore = 0;
let computerScore = 0;

function game(){
    while (playerScore < 5 || computerScore < 5){
        console.log(playRound(playerSelection, computerSelection));
        console.log(`Current Score is ${playerScore} - ${computerScore}`)
    }
    if (playerScore = 5) {
        return `Victory!!!!`
    } else return 'L Bozo :(, try again by refreshing '
}

console.log(game())