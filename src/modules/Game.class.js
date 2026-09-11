'use strict';

/**
 * This class represents the game.
 */
class Game {
  /**
   * Creates a new game instance.
   *
   * @param {number[][]} initialState
   */
  constructor(initialState = null) {
    if (initialState) {
      this.board = initialState.map((row) => [...row]);
      this.status = 'playing';
    } else {
      this.board = Array.from({ length: 4 }, () => Array(4).fill(0));
      this.status = 'idle';
    }

    this.score = 0;
  }

  moveLeft() {
    this.move(false);
  }

  moveRight() {
    this.move(true);
  }

  moveUp() {
    this.transpose();
    this.move(false);
    this.transpose();
  }

  moveDown() {
    this.transpose();
    this.move(true);
    this.transpose();
  }

  move(reversed = false) {
    if (this.status !== 'playing') {
      return;
    }

    const oldBoard = this.getState();

    for (let i = 0; i < 4; i++) {
      let row = [...this.board[i]];

      if (reversed) {
        row.reverse();
      }

      row = this.mergeRow(row);

      if (reversed) {
        row.reverse();
      }

      this.board[i] = row;
    }

    if (!this.boardsEqual(oldBoard, this.board)) {
      this.addRandomTile();
      this.updateStatus();
    }
  }

  /**
   * @returns {number}
   */
  getScore() {
    return this.score;
  }

  /**
   * @returns {number[][]}
   */
  getState() {
    return this.board.map((row) => [...row]);
  }

  /**
   * Returns the current game status.
   *
   * @returns {string} One of: 'idle', 'playing', 'win', 'lose'
   */
  getStatus() {
    return this.status;
  }

  /**
   * Starts the game.
   */
  start() {
    this.board = Array.from({ length: 4 }, () => Array(4).fill(0));
    this.score = 0;
    this.status = 'playing';

    this.addRandomTile();
    this.addRandomTile();
  }

  /**
   * Resets the game.
   */
  restart() {
    this.start();
  }

  mergeRow(row) {
    const filtered = row.filter((value) => value !== 0);
    const result = [];

    for (let i = 0; i < filtered.length; i++) {
      if (filtered[i] === filtered[i + 1]) {
        const merged = filtered[i] * 2;

        result.push(merged);
        this.score += merged;
        i++;
      } else {
        result.push(filtered[i]);
      }
    }

    while (result.length < 4) {
      result.push(0);
    }

    return result;
  }

  transpose() {
    this.board = this.board[0].map((_, col) => {
      return this.board.map((row) => row[col]);
    });
  }

  addRandomTile() {
    const empty = [];

    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (this.board[i][j] === 0) {
          empty.push([i, j]);
        }
      }
    }

    if (!empty.length) {
      return;
    }

    const [r, c] = empty[Math.floor(Math.random() * empty.length)];

    this.board[r][c] = Math.random() < 0.9 ? 2 : 4;
  }

  boardsEqual(a, b) {
    return JSON.stringify(a) === JSON.stringify(b);
  }

  updateStatus() {
    for (const row of this.board) {
      if (row.includes(2048)) {
        this.status = 'win';
        return;
      }
    }

    if (this.canMove()) {
      this.status = 'playing';
    } else {
      this.status = 'lose';
    }
  }

  canMove() {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (this.board[i][j] === 0) {
          return true;
        }

        if (j < 3 && this.board[i][j] === this.board[i][j + 1]) {
          return true;
        }

        if (i < 3 && this.board[i][j] === this.board[i + 1][j]) {
          return true;
        }
      }
    }

    return false;
  }
}

export default Game;
