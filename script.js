let playerScore = 0;
let computerScore = 0;

function roundWin(){
    playerScore += 1;
    return `You Win! ${playerSelection} beats ${computerSelection}.`;
}
function roundLoss(){
    computerScore +=1;
    return `You Lose :(! ${computerSelection} beats ${playerSelection}.`
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

let playerSelection = prompt('Rock, Paper, Scissors');
let computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
console.log(`Score: ${playerScore} - ${computerScore}`);

playerSelection = prompt('Round Two xD');
computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
console.log(`Score: ${playerScore} - ${computerScore}`);

playerSelection = prompt('Round Three');
computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
console.log(`Score: ${playerScore} - ${computerScore}`);

playerSelection = prompt('Round Four');
computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
console.log(`Score: ${playerScore} - ${computerScore}`);

playerSelection = prompt('Last Round!!!!!!');
computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
console.log(`Score: ${playerScore} - ${computerScore}`);

if (playerScore === computerScore){
    console.log('Final Result: Draw...')
} else if (playerScore > computerScore){
    console.log('Final Result: Victory!!!!')
} else if (computerScore > playerScore){
    console.log(`Final Result: You Lose. NT NT GGs :(`)
}
