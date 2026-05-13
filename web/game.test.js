import test from "node:test";
import assert from "node:assert/strict";
import { createBoard, getWinner, isDraw } from "./game.js";

test("createBoard starts with 9 empty cells", () => {
  const board = createBoard();
  assert.equal(board.length, 9);
  assert.deepEqual(board, ["", "", "", "", "", "", "", "", ""]);
});

test("getWinner detects a winning row", () => {
  const board = ["X", "X", "X", "", "", "", "", "", ""];
  assert.equal(getWinner(board), "X");
});

test("isDraw returns true for full board with no winner", () => {
  const board = ["X", "O", "X", "X", "O", "O", "O", "X", "X"];
  assert.equal(isDraw(board), true);
});
