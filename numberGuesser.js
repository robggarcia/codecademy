/*
Rob Garcia
Codecademy
April 4, 2022
Number Guesser
*/

let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
// function returns a random integet between 0 and 9
const generateTarget = () => {
  return Math.floor(Math.random()*10);
}
// function determines which player wins based on which guess is closest to the target, if both players are tied, the human use should win.
const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
  let humanTarget = Math.abs(targetGuess - humanGuess);
  let computerTarget = Math.abs(targetGuess - computerGuess);
  if (humanTarget <= computerTarget) {
    return true;
  } else {
    return false;
  }
}
// function increases the winner's score after each round
const updateScores = (winner) => {
  if (winner === 'human') {
    humanScore ++;
  } else if (winner === 'computer'){
    computerScore ++;
  }
}
// functionupdate the round number after each round
const advanceRound = () => {
  currentRoundNumber ++;
}
advanceRound();
console.log(currentRoundNumber);
