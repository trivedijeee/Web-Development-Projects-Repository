let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameEnded = false;

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function playerMove(index) {
  if (!gameEnded && board[index] === "") {
    board[index] = currentPlayer;
    render();
    checkWinner();
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }
}

function checkWinner() {
  for (const pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (board[a] && board[a] === board[b] && board[b] === board[c]) {
      document.getElementById("result").innerText = `Player ${board[a]} wins!`;
      gameEnded = true;
      return;
    }
  }
  if (board.every(cell => cell !== "")) {
    document.getElementById("result").innerText = "It's a tie!";
    gameEnded = true;
  }
}

function resetGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  gameEnded = false;
  render();
  document.getElementById("result").innerText = "";
}

function render() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell, index) => {
    cell.innerText = board[index];
  });
}
