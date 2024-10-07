# Tic-Tac-Toe Game

A classic Tic-Tac-Toe game built with React that allows two players to take turns and play on a 3x3 board. The game supports checking for a winner and handling draw conditions.

## Table of Contents

- [Tic-Tac-Toe Game](#tic-tac-toe-game)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Demo](#demo)
  - [Installation](#installation)
  - [How to Play](#how-to-play)
  - [Project Structure](#project-structure)
  - [License](#license)

## Features

- 🎮 Two-player gameplay with alternating turns
- 🏆 Displays the winner when a player wins
- 🤝 Handles draw conditions
- 📜 Tracks game history, allowing players to jump to any previous move
- 🖥️ Simple and intuitive UI using React components

## Demo

- **Live Demo:** [Play the Game](https://lws-tic-tac-toe-react.netlify.app/)
- You can also see the game in action by running it locally.
- Follow the instructions below to set up the project.

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/md-ahr/lws-tic-tac-toe.git
   cd lws-tic-tac-toe
   ```
2. **Install the dependencies:**

   ```bash
    npm install
   ```

3. **Start the development server:**

   ```bash
    npm run dev
   ```

4. **Open your browser and navigate to http://localhost:3000 to see the game.**

   ```bash
    http://localhost:3000
   ```

5. **Build the project**

   ```bash
    npm run build
   ```

## How to Play

- The game is played on a 3x3 grid.
- Players take turns marking a square with their symbol (either "X" or "O").
- The first player to align three of their symbols in a horizontal, vertical, or diagonal row wins.
- If all squares are filled and no player has won, the game ends in a draw.

## Project Structure

```bash
/src
├── components
│ ├── Board.js # The game board component
│ ├── Game.js # Main game component that manages state
│ ├── History.js # Component to display game history
│ ├── Square.js # Component representing each square on the board
├── lib
│ ├── calculateWinner.js # Logic to calculate the winner of the game
└── App.js # Entry point of the app
```

## License

- This project is licensed under the MIT License.
- You are free to use, modify, and distribute it as you like.
