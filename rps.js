const btns = document.querySelectorAll("button");
const results = document.querySelector(".results");
const cpu_res = document.querySelector(".cpu-choice");
const score = document.querySelector(".score");

const play_game = () => {
  let player_score = 0;
  let cpu_score = 0;
  let games_left = 5;

  const end_game = (p_score, c_score) => {
    if (p_score > c_score) {
      score.textContent = "YOU WIN";
    } else {
      score.textContent = "YOU LOSE";
    }

    player_score = 0;
    cpu_score = 0;
    games_left = 5;
  };

  btns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      const player_choice = e.target.id.replace("player-", "");
      const res = playRound(player_choice);
      cpu_res.textContent = res.cpu_choice.toUpperCase();

      if (res.win == "DRAW") {
        results.textContent = "Draw.";
      }

      if (res.win == true) {
        results.textContent = `You Win: ${res.player_choice} beats ${res.cpu_choice}.`;
        player_score++;
        games_left--;
        score.textContent = `Rounds left: ${games_left}`;
      }

      if (res.win == false) {
        results.textContent = `You Lose: ${res.cpu_choice} beats ${res.player_choice}`;
        cpu_score++;
        games_left--;
        score.textContent = `Rounds left: ${games_left}`;
      }

      if (games_left == 0) {
        end_game(player_score, cpu_score);
      }
    });
  });
};

const CHOICES = ["rock", "paper", "scissors"];
const getComputerChoice = () => CHOICES[Math.floor(Math.random() * 3)];

const playRound = (player, cpu = getComputerChoice()) => {
  if (player == cpu) {
    return { player_choice: player, cpu_choice: cpu, win: "DRAW" };
  }

  if (
    (player == "rock" && cpu == "scissors") ||
    (player == "paper" && cpu == "rock") ||
    (player == "scissors" && cpu == "paper")
  ) {
    return { player_choice: player, cpu_choice: cpu, win: true };
  }

  return { player_choice: player, cpu_choice: cpu, win: false };
};

play_game();
