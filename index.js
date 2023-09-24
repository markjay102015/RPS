let computer = document.querySelector(".computer img");
let player = document.querySelector(".player img");
let computerPoints = document.querySelector(".computerPoints");
let playerPoints = document.querySelector(".playerPoints");
let options = document.querySelectorAll(".options button");

options.forEach((option) => {
  option.addEventListener("click", () => {
    computer.classList.add("shakeComputer");
    player.classList.add("shakePlayer");

    setTimeout(() => {
      computer.classList.remove("shakeComputer");
      player.classList.remove("shakePlayer");

      player.src = "./img/" + option.innerHTML + "Player.png";

      let choice = ["rock", "paper", "scissors"];
      let arrayNo = Math.floor(Math.random() * 3);
      let computerChoice = choice[arrayNo];
      computer.src = "./img/" + computerChoice + "Computer.png";

      let cPoints = parseInt(computerPoints.innerHTML);
      let pPoints = parseInt(playerPoints.innerHTML);

      if (option.innerHTML === "rock") {
        if (computerChoice === "paper")
          computerPoints.innerHTML = cPoints + 1;
        else if (computerChoice === "scissors")
          playerPoints.innerHTML = pPoints + 1;
      } else if (option.innerHTML === "paper") {
        if (computerChoice === "scissors")
          computerPoints.innerHTML = cPoints + 1;
        else if (computerChoice === "rock")
          playerPoints.innerHTML = pPoints + 1;
      } else {
        if (computerChoice === "rock")
          computerPoints.innerHTML = cPoints + 1;
        else if (computerChoice === "paper")
          playerPoints.innerHTML = pPoints + 1;
      }
    }, 900);
  });
});
