# Snake Game

This is a classic Snake Game implemented using HTML, CSS, and JavaScript. The goal of the game is to control the snake and eat as much food as possible without hitting the walls or yourself. The snake grows longer as it eats food, and the game speed increases as the snake gets longer.

![alt text](chrome_T8nXgsZFSS.gif)

## Features

- Classic snake movement (up, down, left, right)
- Growing snake when it eats food
- Game speed increases as the snake grows
- Tracks current score and high score
- Responsive design for various screen sizes

## How to Play

1. Press **Enter** to start the game.
2. Use the **Arrow keys** to control the snake:
   - Up Arrow: Move Up
   - Down Arrow: Move Down
   - Left Arrow: Move Left
   - Right Arrow: Move Right
3. Avoid running into the walls or the snake's body.
4. The game ends when the snake collides with the wall or itself.
5. Try to achieve the highest score!

## Project Structure

- **HTML**: The structure of the game.
- **CSS**: The styling of the game elements, including the game board, borders, and snake.
- **JavaScript**: The game logic, including snake movement, food generation, score tracking, and collision detection.

## HTML Overview

```html
<script src="script.js" defer></script>
```

### What is `defer`?

The `defer` attribute is particularly important and has the following effects:

- **Defer Loading**: It tells the browser to download the script in the background while it continues to parse the HTML. This ensures that the script doesn't block the HTML parsing, improving page load time.

- **Execute After Parsing**: The script is executed only after the HTML document has been fully parsed. This ensures that the script interacts with elements that are already available in the DOM.

- **Execution Order**: Scripts with the `defer` attribute are executed in the order they appear in the document, unlike scripts with the `async` attribute.

**In summary**, using `defer` ensures that your JavaScript runs after the HTML is fully parsed, without blocking the page loading process.

## CSS Overview

```css
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  font-family: "VT323", monospace;
}

body,
.snake {
  background-color: #414141;
}
```

### CSS Comments Explanation:

- **Grid Setup**:
  `grid-template-columns: repeat(20, 20px)` creates a grid with 20 columns, each 20px wide.

- **Borders**:

  - **First Border (.game-border-one)**: A thick solid border with a 30px radius.
  - **Second Border (.game-border-two)**: A smaller radius with a shadow for an inset effect.
  - **Third Border (.game-border-three)**: The innermost border with the smallest radius and a background color.

- **Text Instructions (#instruction)**: Positioned at the center, prompting the user to press "Enter" to start the game.

- **Score Display**: Positioned above the game board, tracking current and high scores.

## JS Overview

### JS Comments Explanation:

- **HTML Elements**:
  Elements like `gameboard`, `instructionText`, and `score` are fetched from the DOM to interact with them during the game.

- **Variables**:

  - `gridSize`: The game grid is 20x20 squares.
  - `snake`: An array that tracks the snake's position.
  - `food`: Generates the food at a random position on the grid.
  - `direction`: Tracks the current movement direction of the snake.
  - `gameSpeedDelay`: Controls the snake's movement speed, which decreases as the snake grows.

- **Game Functions**:

  - `draw()`: Clears the board and redraws the snake and food elements based on their positions.
  - `drawSnake()`: Loops through each segment of the snake and adds it to the game board.
  - `createGameElement()`: A helper function to create either the snake or the food elements.
  - `setPosition()`: Sets the position of the snake or food on the grid.
  - `move()`: Updates the snake's position based on the direction, grows the snake if food is eaten, and increases the speed after every food is consumed.

- **Game Mechanics**:

  - `generateFood()`: Randomly generates a new position for the food.
  - `increaseSpeed()`: Gradually increases the speed of the game as the snake grows.
  - `checkCollision()`: Checks if the snake has collided with the walls or itself.
  - `resetGame()`: Resets the game state when the snake collides.

- **Score Handling**:

  - `updateScore()`: Updates the displayed current score based on the snake's length.
  - `updateHighScore()`: Updates and displays the high score if the current score exceeds it.

- **Game Controls**:
  - `startGame()`: Starts the game when the "Enter" key is pressed.
  - `handleKeyPress()`: Detects arrow key presses and updates the snake's movement direction.
