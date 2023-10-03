
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

// function roundWin(){
//     return `You Win! ${playerSelection} beats ${computerSelection}.`;
// }

// function roundLoss(){
//     return `You Lose :(! ${playerSelection} beats ${computerSelection}.`
// }

// function roundDraw(){
//     return `It's a draw!!!`;
// }
function roundWin(){
    return `You Win! ${playerSelection} beats ${computerSelection}.`;
}
function roundLoss(){
    return `You Lose :(! ${playerSelection} beats ${computerSelection}.`
}
function roundDraw(){
    return `It's a draw!!!`;
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

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));