const playerChoiceArea = document.getElementById("player");
const computerChoiceArea = document.getElementById("computer");
const resultArea = document.getElementById("result");
const choiceBtns = document.querySelectorAll("button");

let playerChoice;
let computerChoice;
let result;

// Choice Buttons

choiceBtns.forEach((choiceBtn) =>
  choiceBtn.addEventListener("click", (e) => {
    playerChoice = e.target.id;
    playerChoiceArea.innerHTML = playerChoice;
    randomComputerChoice();
    checkResult();
  })
);

// Random Computer Choice

function randomComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3) + 1;

  if (randomNum === 1) {
    computerChoice = "rock";
  }
  if (randomNum === 2) {
    computerChoice = "paper";
  }
  if (randomNum === 3) {
    computerChoice = "scissors";
  }

  computerChoiceArea.innerHTML = computerChoice;
}

// Check Result

function checkResult() {
  if (computerChoice === playerChoice) {
    result = "it's a draw!";
  }
  if (computerChoice === "rock" && playerChoice === "paper") {
    result = "you win!";
  }
  if (computerChoice === "rock" && playerChoice === "scissors") {
    result = "you lose!";
  }
  if (computerChoice === "paper" && playerChoice === "scissors") {
    result = "you win!";
  }
  if (computerChoice === "paper" && playerChoice === "rock") {
    result = "you lose!";
  }
  if (computerChoice === "scissors" && playerChoice === "rock") {
    result = "you win!";
  }
  if (computerChoice === "scissors" && playerChoice === "paper") {
    result = "you lose!";
  }

  resultArea.innerHTML = result;
}
