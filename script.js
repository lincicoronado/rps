const choices = ['rock', 'paper', 'scisors', 'lizard', 'spock'];
const winners = [];

function game() {
    for(let i = 1; i <= 5; i++) {
        playRound(i);
    }
    document.querySelector("button").textContent = "Play new game";
    logWins();
}

function playRound(round) {
    const playerSelection = playerChoice ();
    const computerSelection = computerChoice ();
    console.log (computerSelection)
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);
    logRound(playerSelection,computerSelection,winner,round);

}

function playerChoice () {
    let input = prompt('Type Rock, Paper, Scissors, Lizard or Spock.');
    while(input == null) {
        input = prompt('Type Rock, Paper, Scissors, Lizard or Spock.');
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    while (check == false) {
        input = prompt (
            "Type Rock, Paper, Scissors, Lizard or Spock. Spelling needs to be exact, capitalization doesn't matter."
        );
        while (input == null) {
            input = prompt('Type Rock, Paper, Scissors, Lizard or Spock.');
        }
        input = input.toLowerCase();
        check = validateInput(input);
    }
    return input;
}

function computerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
  }
  
  function validateInput(choice) {
    return choices.includes(choice);
}

function checkWinner(choiceP, choiceC){
    if(choiceP === choiceC) {
        return "It's a tie.";
    } else if((choiceP === "scissors" && choiceC == "paper") || 
        (choiceP === "paper" && choiceC == "rock") || 
        (choiceP === "rock" && choiceC == "lizard") ||
        (choiceP === "lizard" && choiceC == "spock") ||
        (choiceP === "spock" && choiceC == "scissors") ||
        (choiceP === "scissors" && choiceC == "lizard") ||
        (choiceP === "lizard" && choiceC == "paper") ||
        (choiceP === "paper" && choiceC == "spock") ||
        (choiceP === "spock" && choiceC == "rock") ||
        (choiceP === "rock" && choiceC == "scissors")
    ) {
        return "Player";
    } else {
        return "Computer";
    }
}

function logWins() {
    let playerWins = winners.filter((item) => item == "Player").length;
    let computerWins = winners.filter((item) => item == "Computer").length;
    let ties = winners.filter ((item) => item == "Tie").length;
    console.log('Results');
    console.log('Player Wins', playerWins);
    console.log('Computer Wins', computerWins);
    console.log('Ties', ties);
}
function logRound(playerChoice,computerChoice,winner,round) {
    console.log('Round', round);
    console.log('Player Chose:', playerChoice);
    console.log('Computer chose:', computerChoice);
    console.log(winner, 'Won the Round');
    console.log("---------------------");
}
game();