2048 Game

## Introduction
Welcome to the 2048 Game — a classic single-player sliding tile puzzle built from scratch with JavaScript. The goal of the game is to combine tiles with the same numbers and reach the 2048 tile.

The game features a responsive interface, smooth tile animations, score tracking, and different game states for winning and losing.

## Key Features
- Classic 2048 Gameplay: Fully functional 4x4 game board with tile movement and merging mechanics.
- Keyboard Controls: Play the game using the arrow keys (↑, ↓, ←, →).
- Score Tracking: The current score is updated automatically whenever tiles are merged.
- Game States: The game supports idle, playing, win, and lose states with corresponding UI messages.
- Restart Functionality: Restart the game and begin a new round at any time.
Responsive Design: The game interface adapts seamlessly to different screen sizes.
- Tile Animations: Smooth animations for tile movement and merging.
- Modular Codebase: Game logic is separated from DOM manipulation, making the code clean and easy to maintain.

## Key Challenges
Developing the 2048 game involved several challenges, particularly when implementing core mechanics and synchronizing the UI with the game state:
- Tile Movement & Merging: Implementing precise movement logic while preventing tiles from merging more than once per single move.
- Game State Management: Handling state transitions and dynamically updating UI components accordingly.
- Score Calculation: Accurately calculating and updating score totals after every successful merge.
- Responsive Design: Adapting the game board layout across mobile, tablet, and desktop viewports.
- Smooth Animations: Managing movement and merge animations without sacrificing performance or input responsiveness.

## Technical Requirements
To run this project locally, ensure you have the following installed:
- A modern web browser (Chrome, Firefox, Safari, or Edge)
- Node.js 14.x or newer
- NPM 6.x or newer

## Installation and Setup

1. **Clone the repository:**

  ```bash
   git clone [https://github.com/ferenssofia/2048-game.git] 
    ```   
2. **Navigate to the project directory:**

  ```bash
   cd 2048-game
   ```
3. **Install dependencies:**

```bash
   npm install
   ```
4. **Start the local development server:**

```bash
   npm start
   ```  

## Usage
1. Open the local server URL provided in your terminal output (usually http://localhost:1234 or similar).
2. Use the keyboard arrow keys to move the tiles:
- ↑ — Move tiles up
- ↓ — Move tiles down
- ← — Move tiles left
- → — Move tiles right
3. Combine tiles with matching values to increase your score and reach the 2048 tile!

## Example

- [DEMO LINK](https://ferenssofia.github.io/2048_game/)

## Technologies Used
- HTML5 — Semantic layout and structural markup.
- SCSS — Modular styling, variables, and custom animations.
- JavaScript (ES6+) — Core game logic, DOM manipulation, and event listeners.
- Parcel — Web application bundler.
- Git & GitHub — Version control and repository hosting.
- GitHub Pages — Live demo deployment.
