let userChoice;

function game(event){
  userChoice = event.target.value;
  oneRound();
  return userChoice
}

function getComputerChoice() {
  const options = {
      0: "paper",
      1: "rock",
      2: "scissors",
  };

  return options[Math.floor(Math.random() * 3)];
}

function playRound( computerSelection, playerSelection) {
  let dynamicDiv = document.getElementById('feedback');
  let choiceDisplay = document.getElementById('choice-display');

  // Display choices
  choiceDisplay.innerHTML = `
    <div class="choice-box">
      <div class="choice-label">You chose:</div>
      <div class="choice-value">${playerSelection}</div>
    </div>
    <div class="choice-box">
      <div class="choice-label">CPU chose:</div>
      <div class="choice-value">${capitalizeFirstLetter(computerSelection)}</div>
    </div>
  `;

  switch (true) {
      case computerSelection === "paper" && playerSelection === "Paper":
          dynamicDiv.textContent = "A tie!!!";
          return "A tie!!!"
      case computerSelection === "rock" && playerSelection === "Rock":
          dynamicDiv.textContent = "A tie!!!";
          return "A tie!!!"
      case computerSelection === "scissors" && playerSelection === "Scissors":
          dynamicDiv.textContent = "A tie!!!";
          return "A tie!!!"
      case computerSelection === "rock" && playerSelection === "Scissors":
          dynamicDiv.textContent = "You lose!!!";
          return "You lose!!!"
      case computerSelection === "paper" && playerSelection === "Rock":
          dynamicDiv.textContent = "You lose!!!";
          return "You lose!!!"
      case computerSelection === "scissors" && playerSelection === "Paper":
          dynamicDiv.textContent = "You lose!!!";
          return "You lose!!!"
      case computerSelection === "paper" && playerSelection === "Scissors":
          dynamicDiv.textContent = "You Win!!!";
          return "You win!!!"
      case computerSelection === "rock" && playerSelection === "Paper":
          dynamicDiv.textContent = "You Win!!!";
          return "You win!!!"
      case computerSelection === "scissors" && playerSelection === "Rock":
          dynamicDiv.textContent = "You Win!!!";
          return "You win!!!"
      default:
          dynamicDiv.textContent = "Choose some weapon to fight";
  }
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
let computerCounter = 0;
let playerCounter = 0;

function oneRound() {
  let roundResult = playRound(getComputerChoice(),userChoice );
  let playerScore = document.getElementById('player-score');
  let cpuScore = document.getElementById('cpu-score');

  if (roundResult === "A tie!!!"){
    console.log("If you read this, is a tie")
  }
  else if (roundResult === "You lose!!!"){
    computerCounter+=1;
    cpuScore.textContent = computerCounter;
  }
  else if (roundResult === "You win!!!"){
    playerCounter+=1;
    playerScore.textContent = playerCounter;
  }
  endgame(playerCounter,computerCounter)
  // console.log(playerCounter, computerCounter);
}

function endgame(playerCounter, computerCounter){
  let dynamicDivEnd = document.getElementById('feedback');
  let scsBtn = document.getElementById('scsBtn');
  let pprBtn = document.getElementById('pprBtn');
  let rckBtn = document.getElementById('rckBtn');
  if(playerCounter === 5 || computerCounter === 5){
    if(playerCounter === 5){
      dynamicDivEnd.textContent = "You Won the Game!";
    } else {
      dynamicDivEnd.textContent = "CPU Won the Game!";
    }
    scsBtn.disabled = true;
    rckBtn.disabled = true;
    pprBtn.disabled = true;
  }
}

function resetGame(){
  // Reset counters
  computerCounter = 0;
  playerCounter = 0;

  // Reset score display
  document.getElementById('player-score').textContent = '0';
  document.getElementById('cpu-score').textContent = '0';

  // Reset feedback message
  document.getElementById('feedback').textContent = "Let´s Start!!!";

  // Clear choice display
  document.getElementById('choice-display').innerHTML = '';

  // Enable all buttons
  document.getElementById('scsBtn').disabled = false;
  document.getElementById('rckBtn').disabled = false;
  document.getElementById('pprBtn').disabled = false;
}
