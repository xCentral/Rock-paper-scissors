function computerSelection() {
 selection = Math.floor(Math.random() * 3 + 1)
 if (selection === 1) {
    console.log('Ai chose Rock');
    return computerSelection = 'Rock';
 } else if (selection === 2) {
    console.log('Ai chose Paper');
    return computerSelection = 'Paper';
 } else {
    console.log('Ai chose Scissors');
    return computerSelection = 'Scissors';
 } 
 
}

function playerSelection() {
   let choice = prompt("Rock paper or scissors?", '');
   if (choice.toLowerCase() === 'rock') {
      //console.log('REEEE');
     return playerSelection = 'Rock';
   } else if 
      (choice.toLowerCase() === 'paper') {
         //console.log('Paper');
         return playerSelection = 'Paper';
      } else if    
      (choice.toLowerCase() === 'scissors') {
       //  console.log('Scissors'); 
         return playerSelection = 'Scissors';
   } else {
         return playerSelection = 'These are not valid entries!!!';

   }
   
}

let selection = playerSelection();
let cselection = computerSelection();

let playRound = function() {
   if 
   (playerSelection === computerSelection) {
      console.log('its a tie.');
   }
   else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
      console.log('Ai Wins!');
   }
   else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
      console.log('Ai Wins!');
   } 
   else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
         console.log('Ai Wins!');
   }
   else if (playerSelection === 'These are not valid entries!!!') {
           console.log('Bro, wyd?...');

   } else {
      console.log('Damn you destroyed the AI...');

}
}

let game = function() {
   for (let i = 0; i < 5; i++) {
      playRound();
   }
}

//let computerSel= computerSelection();
let play = playRound();
//let sele = playerSelection();