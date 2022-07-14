let computerChoice = "default";
let playerChoice = "default";
let roundWinner = "default";

function computerSelection() {
  selection = Math.floor(Math.random() * 3 + 1);
  if (selection === 1) {
    return (computerChoice = "Rock");
  } else if (selection === 2) {
    return (computerChoice = "Paper");
  } else {
    return (computerChoice = "Scissors");
  }
}

//console.log(computerChoice);

function playerSelection() {
  let playerPrompt = prompt("Rock paper or scissors?");
  if (playerPrompt.toLowerCase() === "rock") {
    return (playerChoice = "Rock");
  } else if (playerPrompt.toLowerCase() === "paper") {
    return (playerChoice = "Paper");
  } else if (playerPrompt.toLowerCase() === "scissors") {
    return (playerChoice = "Scissors");
  } else {
    return (playerChoice = "These are not valid entries!!!");
  }
}

//console.log("test" + playerChoice);

function playRound() {
  playerSelection();
  computerSelection();
  //console.log(playerChoice);
  // console.log(computerChoice);
  if (playerChoice === computerChoice) {
    return (roundWinner = "Tie game!");
  } else if (playerChoice === "Rock" && computerChoice === "Paper") {
    return (roundWinner = "Ai wins!");
  } else if (playerChoice === "Paper" && computerChoice === "Scissors") {
    return (roundWinner = "Ai wins!");
  } else if (playerChoice === "Scissors" && computerChoice === "Rock") {
    return (roundWinner = "Ai wins!");
  } else if (playerChoice === "These are not valid entries!!!") {
    return (roundWinner = "Bro, wyd?");
  } else {
    return (roundWinner = "You win!");
  }
}

let game = function () {
  let gameWinner = "default";
  let playerWins = 0,
    computerWins = 0;
  for (let i = 0; i < 5; i++) {
    playRound();
    if (roundWinner === "Tie game!") {
      console.log("Ooof, tie round!");
      playerWins++ && computerWins++;
    } else if (roundWinner === "Ai wins!") {
      console.log("Comp-u-tor wins this round!");
      computerWins++;
    } else {
      roundWinner === "You win!";
      {
        playerWins++;
        console.log("You win this round!");
      }
    }
  }

  console.log(playerWins);
  console.log(computerWins);
  if (playerWins === computerWins) {
    console.log("Tie game, go again?"); // add prompt to reset, when we learn how.
  } else if (playerWins > computerWins) {
    console.log("You've won the game!");
  } else if (playerWins < computerWins) {
    console.log("Computer wins, rippu.");
  }
};

//let computerSel= computerSelection();
//let play = game();
let sele = game();
