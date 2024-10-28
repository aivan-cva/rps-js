const playGame = () => {
  let cpuCounter = 0;
  let playerCounter = 0;
  let rounds = 5;
  const CHOICES = ["rock", "paper", "scissors"];
  const getComputerChoice = () => CHOICES[Math.floor(Math.random() * 3)];

  const playRound = (playerChoice, cpuChoice, CHOICES) => {
    if (!CHOICES.includes(playerChoice)) {
      return "Please enter a valid option.";
    }

    if (playerChoice == cpuChoice) {
      return "Draw";
    }

    if (playerChoice == "paper") {
      if (cpuChoice == "scissors") {
        console.log(`You loose ${cpuChoice} beats ${playerChoice}`);
        return "CPU";
      } else {
        console.log(`You win ${playerChoice} beats ${cpuChoice}`);
        return "PLAYER";
      }
    }

    if (playerChoice == "rock") {
      if (cpuChoice == "paper") {
        console.log(`You loose ${cpuChoice} beats ${playerChoice}`);
        return "CPU";
      } else {
        console.log(`You win ${playerChoice} beats ${cpuChoice}`);
        return "PLAYER";
      }
    }

    if (playerChoice == "scissors") {
      if (cpuChoice == "rock") {
        console.log(`You loose ${cpuChoice} beats ${playerChoice}`);
        return "CPU";
      } else {
        console.log(`You win ${playerChoice} beats ${cpuChoice}`);
        return "PLAYER";
      }
    }
  };

  while (rounds >= 0) {
    const CPU = getComputerChoice();
    const PLAYER = prompt("Choose rock, paper or scissors: ");
    let winner = playRound(PLAYER, CPU, CHOICES);

    if (winner == "CPU") {
      cpuCounter++;
    } else if (winner == "PLAYER") {
      playerCounter++;
    } else {
      console.log("DRAW");
    }

    console.log(`Player: ${playerCounter} | CPU:${cpuCounter}`);
    rounds--;
  }

  if (playerCounter == cpuCounter) {
    return "IT'S A DRAW";
  }
  return playerCounter > cpuCounter ? `YOU WIN THE GAME` : "YOU LOSE THE GAME";
};

console.log(playGame());
