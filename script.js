
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

function playRound(playerSelection, computerSelection){
    function roundWin(){
        return `You Win! ${playerSelection} beats ${computerSelection}.`;
    }
    function roundLoss(){
        return `You Lose :(! ${playerSelection} beats ${computerSelection}.`
    }
    function roundDraw(){
        return `It's a draw!!!`;
    }
    PlayerSelection = firstLetterCap(playerSelection);
    if (PlayerSelection === computerSelection){
        roundDraw();
    } else if (playerSelection === 'Rock'){
        if (computerSelection === 'Scissors'){
            roundWin();
        } else roundLoss();
    } else if (playerSelection === 'Paper'){
        if (computerSelection === 'Rock'){
            roundWin();
        } else roundLoss();
    } else if (playerSelection === 'Scissors'){
        if (computerSelection === 'Paper'){
            roundWin();
        } else roundLoss();
    }
}

console.log(playRound('rock', 'rock'));