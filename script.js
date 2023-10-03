
function getComputerChoice() {
    let possibleChoices = ['Rock', 'Paper', 'Scissors'];
    let computerChoice = possibleChoices[Math.floor(Math.random() * 3)];
    return computerChoice;
}

// console.log(getComputerChoice())


function playRound(playerSelection, computerSelection){

}



function firstLetterCap(string) {
    string = string.toLowerCase();
    let firstLetter = (string.charAt(0)).toUpperCase();
    let endOfWord =  string.slice(1, string.length)
    let normalString = firstLetter + endOfWord
    return normalString;
}

console.log(firstLetterCap('rOcK'))