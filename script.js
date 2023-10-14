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
        return `You Win! ${playerSelection} beats ${computerSelection}.`;
    }
    roundLoss = () => {
        computerScore +=1;
        return `You Lose :(! ${computerSelection} beats ${playerSelection}.`
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


const rock = document.querySelector('#rock')

rock.addEventListener('click', () => console.log(playRound(rock.textContent)));