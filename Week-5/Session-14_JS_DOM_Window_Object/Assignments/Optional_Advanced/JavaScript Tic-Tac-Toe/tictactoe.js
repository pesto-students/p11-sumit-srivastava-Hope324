let playerTurn = true;
let computerMoveTimeout = 0;

const gameStatus = {
  MORE_MOVES_LEFT: 1,
  HUMAN_WINS: 2,
  COMPUTER_WINS: 3,
  DRAW_GAME: 4
};

window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
  const newBtn = document.getElementById("newGameButton");
  newBtn.addEventListener("click", newGame);

  const buttons = getGameBoardButtons();
  for (let button of buttons) {
    button.addEventListener("click", function() {
      boardButtonClicked(button);
    });
  }

  newGame();
}

function getGameBoardButtons() {
  return document.querySelectorAll("#gameBoard > button");
}

function checkForWinner() {
  const buttons = getGameBoardButtons();

  const possibilities = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let indices of possibilities) {
    if (
      buttons[indices[0]].innerHTML !== "" &&
      buttons[indices[0]].innerHTML === buttons[indices[1]].innerHTML &&
      buttons[indices[1]].innerHTML === buttons[indices[2]].innerHTML
    ) {
      if (buttons[indices[0]].innerHTML === "X") {
        return gameStatus.HUMAN_WINS;
      } else {
        return gameStatus.COMPUTER_WINS;
      }
    }
  }

  for (let button of buttons) {
    if (button.innerHTML !== "X" && button.innerHTML !== "O") {
      return gameStatus.MORE_MOVES_LEFT;
    }
  }

  return gameStatus.DRAW_GAME;
}

function newGame() {
  const buttons = getGameBoardButtons();
  for (let button of buttons) {
    button.innerHTML = "";
  }
  playerTurn = true;
  clearTimeout(computerMoveTimeout);
}

function boardButtonClicked(button) {
  if (button.innerHTML === "") {
    button.innerHTML = "X";
    button.classList.add("player");

    const status = checkForWinner();
    if (status === gameStatus.HUMAN_WINS) {
      showResult("You win!");
    } else if (status === gameStatus.DRAW_GAME) {
      showResult("It's a draw!");
    } else {
      switchTurn();
      makeComputerMove();
    }
  }
}

function switchTurn() {
  playerTurn = !playerTurn;
}

function makeComputerMove() {
  if (!playerTurn) {
    const buttons = getGameBoardButtons();
    const availableButtons = [];
    for (let button of buttons) {
      if (button.innerHTML === "") {
        availableButtons.push(button);
      }
    }

    if (availableButtons.length > 0) {
      computerMoveTimeout = setTimeout(function() {
        const randomIndex = Math.floor(Math.random() * availableButtons.length);
        const selectedButton = availableButtons[randomIndex];
        selectedButton.innerHTML = "O";
        selectedButton.classList.add("computer");

        const status = checkForWinner();
        if (status === gameStatus.COMPUTER_WINS) {
          showResult("Computer wins!");
        } else if (status === gameStatus.DRAW_GAME) {
          showResult("It's a draw!");
        } else {
          switchTurn();
        }
      }, 1000);
	}
}
}
	
