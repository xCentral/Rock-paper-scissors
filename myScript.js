let playerWins = 0;
let computerWins = 0;
let roundWinner = "default";


function computerSelection() {
  selection = ["Rock", "Paper", "Scissors"]
  selection = selection[Math.floor(Math.random() * selection.length)];
   return selection;
}


const rpsbuttons = document.querySelector('.buttons');
rock.addEventListener('click', () => {
  playRound('Rock');
})
paper.addEventListener('click', () => {
  playRound('Paper');
})
scissor.addEventListener('click', () => {
  playRound('Scissors');
})

function disableButtons() {
  rpsbuttons.style.visibility="hidden";
 }


const buttons = document.querySelector('body');

  const newDiv = document.createElement("div");
  newDiv.classList.add('newDiv');
  newDiv.textContent= ("Hi, Welcome to the best RPS game! Pick your poison");
  buttons.appendChild(newDiv);

  const scoreDiv = document.createElement("div");
  newDiv.classList.add('scoreDiv');


function playRound(playerChoice) {
  buttons.appendChild(scoreDiv);
  computerChoice = computerSelection();
  if (playerChoice === computerChoice) {
    playerWins++; 
    computerWins++;
    newDiv.textContent= (`You both tied!`);
    buttons.appendChild(newDiv);
  
   if (playerWins === 5 && computerWins === 5) {
    newDiv.textContent= (`You both tied!`);
    buttons.appendChild(newDiv);
    disableButtons();
   } else if (playerWins === 5) {
    newDiv.textContent= (`I admit defeat, you win.`);
    buttons.appendChild(newDiv);
    disableButtons();
   } else if  (computerWins === 5) {
    newDiv.textContent= (`It seems I've bested you!`);
    buttons.appendChild(newDiv);
    disableButtons();
   } 
   

  } else if (
  (playerChoice === "Rock" && computerChoice === "Paper") || 
  (playerChoice === "Paper" && computerChoice === "Scissors") || 
  (playerChoice === "Scissors" && computerChoice === "Rock")) 
  {
    computerWins++;
    newDiv.textContent= (`Computer wins`);
    buttons.appendChild(newDiv);
    
    
    if (computerWins === 5) {
    newDiv.textContent= (`It seems I've bested you!`);
    buttons.appendChild(newDiv);
    disableButtons();
    }

  } else {
    playerWins++;
    newDiv.textContent= (`You won the round!`);
    buttons.appendChild(newDiv);
    
    if (playerWins === 5) {

   newDiv.textContent= (`I admit defeat, you win.`);
   buttons.appendChild(newDiv);
   disableButtons();
  }
  
}
scoreDiv.textContent= (`Player score: ${playerWins} Computer wins: ${computerWins}`);
}



