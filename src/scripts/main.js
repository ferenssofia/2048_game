'use strict';

import Game from '../modules/Game.class.js';

const game = new Game();

const button = document.querySelector('.button');
const score = document.querySelector('.game-score');
const messageStart = document.querySelector('.message-start');
const messageWin = document.querySelector('.message-win');
const messageLose = document.querySelector('.message-lose');
const cells = document.querySelectorAll('.field-cell');

render();

button.addEventListener('click', () => {
  if (game.getStatus() === 'idle') {
    game.start();

    button.textContent = 'Restart';
    button.classList.remove('start');
    button.classList.add('restart');
  } else {
    game.restart();
  }

  render();
});

document.addEventListener('keydown', (e) => {
  if (game.getStatus() !== 'playing') {
    return;
  }

  switch (e.key) {
    case 'ArrowLeft':
      e.preventDefault();
      game.moveLeft();
      break;

    case 'ArrowRight':
      e.preventDefault();
      game.moveRight();
      break;

    case 'ArrowUp':
      e.preventDefault();
      game.moveUp();
      break;

    case 'ArrowDown':
      e.preventDefault();
      game.moveDown();
      break;

    default:
      return;
  }

  render();
});

function render() {
  const board = game.getState();

  score.textContent = game.getScore();

  cells.forEach((cell, index) => {
    const row = Math.floor(index / 4);
    const col = index % 4;
    const value = board[row][col];
    const previousValue = cell.textContent ? Number(cell.textContent) : 0;

    cell.className = 'field-cell';

    if (value === 0) {
      cell.textContent = '';
    } else {
      cell.textContent = value;
      cell.classList.add(`field-cell--${value}`);

      if (previousValue > 0 && value > previousValue) {
        cell.classList.add('field-cell--pop');
      }
    }
  });

  messageStart.classList.add('hidden');
  messageWin.classList.add('hidden');
  messageLose.classList.add('hidden');

  switch (game.getStatus()) {
    case 'idle':
      messageStart.classList.remove('hidden');
      break;

    case 'win':
      messageWin.classList.remove('hidden');
      break;

    case 'lose':
      messageLose.classList.remove('hidden');
      break;
  }
}
