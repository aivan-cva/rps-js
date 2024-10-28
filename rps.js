const choices = ["rock", "paper", "scissors"];

const getComputerChoice = () => choices[Math.floor(Math.random() * 3)];

const playGame = () => {
  const choice = prompt("Choose rock, paper or scissors: ");
  const CPU = getComputerChoice();

  if (!choices.includes(choice)) {
    return "Please enter a valid option.";
  }

  if (choice == CPU) {
    return "Draw";
  }

  if (choice == "paper") {
    if (CPU == "scissors") {
      return `You loose ${CPU} beats ${choice}`;
    } else {
      return `You win ${choice} beats ${CPU}`;
    }
  }

  if (choice == "rock") {
    if (CPU == "paper") {
      return `You loose ${CPU} beats ${choice}`;
    } else {
      return `You win ${choice} beats ${CPU}`;
    }
  }

  if (choice == "scissors") {
    if (CPU == "rock") {
      return `You loose ${CPU} beats ${choice}`;
    } else {
      return `You win ${choice} beats ${CPU}`;
    }
  }
};

console.log(playGame());
