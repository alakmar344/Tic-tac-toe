const statusEl = document.getElementById("status");
const restartEl = document.getElementById("restart");
const cells = [...document.querySelectorAll(".cell")];

function createBoard() {
  return Array(9).fill("");
}

function getWinner(board) {
  const winLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const [a, b, c] of winLines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}

function isDraw(board) {
  return !getWinner(board) && board.every(Boolean);
}

let board = createBoard();
let current = "X";
let gameEnded = false;

function setStatus(message) {
  statusEl.textContent = message;
}

function renderCell(index) {
  const value = board[index];
  const cell = cells[index];
  cell.textContent = value;
  cell.classList.remove("x", "o");
  if (value) {
    cell.classList.add(value.toLowerCase());
  }
}

function finishGame(message) {
  gameEnded = true;
  cells.forEach((cell) => {
    cell.disabled = true;
  });
  setStatus(message);
}

function handleMove(index) {
  if (gameEnded || board[index]) return;

  board[index] = current;
  renderCell(index);

  const winner = getWinner(board);
  if (winner) {
    finishGame(`Player ${winner} wins!`);
    return;
  }

  if (isDraw(board)) {
    finishGame("It's a draw!");
    return;
  }

  current = current === "X" ? "O" : "X";
  setStatus(`Player ${current}'s turn`);
}

function resetGame() {
  board = createBoard();
  current = "X";
  gameEnded = false;
  cells.forEach((cell, index) => {
    cell.disabled = false;
    renderCell(index);
  });
  setStatus("Player X's turn");
}

cells.forEach((cell, index) => {
  cell.addEventListener("click", () => handleMove(index));
});

restartEl.addEventListener("click", resetGame);

resetGame();
