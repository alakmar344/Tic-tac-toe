import { createBoard, getWinner, isDraw } from "./game.js";

const statusEl = document.getElementById("status");
const restartEl = document.getElementById("restart");
const cells = [...document.querySelectorAll(".cell")];

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
    board[index] = "";
    renderCell(index);
  });
  setStatus("Player X's turn");
}

cells.forEach((cell, index) => {
  cell.addEventListener("click", () => handleMove(index));
});

restartEl.addEventListener("click", resetGame);

resetGame();
