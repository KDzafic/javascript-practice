//html elements
const board = document.getElementById("gameboard");
const instructionText = document.getElementById("instruction");
const logo = document.getElementById("logo")
const score = document.getElementById("current-score");
const highScoreText = document.getElementById("high-score");

//variables
//grid-area:10/10 in center 20x20 is the size of the board
const gridSize = 20;
let snake = [{ x: 10, y:10 }]
let food = generateFood();
let direction = 'right';
let gameIntervalId;
let gameSpeedDelay = 200;
let gameStarted = false;
let highScore = 0;


//draw game
function draw() {
    board.innerHTML = '';
    drawSnake();
    drawFood();
    updateScore();
}

//draw snake
function drawSnake() {
    snake.forEach((segment) => {
        const snakeElement = createGameElement('div', 'snake');
        setPosition(snakeElement, segment);
        board.appendChild(snakeElement);
    })
}

// Create snake or food
function createGameElement(tag, className) {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

//set snake or food position
function setPosition(element, position) {
    element.style.gridColumn = position.x;
    element.style.gridRow = position.y;
}

//create food function
function drawFood() {
    if (gameStarted) {
        const foodElement = createGameElement('div', 'food');
        setPosition(foodElement, food);
        board.appendChild(foodElement);
    }
}

function generateFood() {
    const x = Math.floor(Math.random() * gridSize) + 1;
    const y = Math.floor(Math.random() * gridSize) + 1;
    return { x, y };
}

//moving snake
function move() {
    const head = {...snake[0]}; //gets the 10 10 position but a copy not the original variable;
    switch(direction) {
        case 'right':
            head.x++;
            break;
        case 'left':
            head.x--;
            break;
        case 'up':
            head.y--;
            break;
        case 'down':
            head.y++;
            break;
    }

    snake.unshift(head); // what unshift does is adds the head object to the begining of the array so head replaces 10 10(it will not be replaced just positioned at [1])
    
    if (head.x == food.x && head.y == food.y) {
        food = generateFood();
        increaseSpeed();
        clearInterval(gameIntervalId); //resets the movement and move to not have bugs
        gameIntervalId = setInterval(() => {
            move();
            checkCollision();
            draw();// to see the new changes new position
        }, gameSpeedDelay) // when it becomes biger increase the speed
    } else {
        snake.pop(); //this will remove 10 10 if 10 10 remains the snake will just grow it will not move
    }
}

//start game
function startGame() {
    gameStarted = true; // keep track of running game
    instructionText.style.display = 'none';
    logo.style.display = 'none';
    gameIntervalId = setInterval(() =>{
        move();
        checkCollision();
        draw();
    },gameSpeedDelay)
}

document.addEventListener('keydown', handleKeyPress);

// space bar listneer
function handleKeyPress(event) {
    if ((!gameStarted && event.code === 'Enter') ||
        (!gameStarted && event.code === ' ')) {
        startGame();
    } else {
        switch (event.code) {
            case 'ArrowUp':
                direction = 'up';
                break;
            case 'ArrowDown':
                direction = 'down';
                break;
            case 'ArrowLeft':
                direction = 'left';
                break;
            case 'ArrowRight':
                direction = 'right';
                break;
        }
    }
}

function increaseSpeed() {
    if (gameSpeedDelay > 150) {
        gameSpeedDelay -= 5;
    } else if (gameSpeedDelay > 100) {
        gameSpeedDelay -= 3;
    } else if (gameSpeedDelay > 50) {
        gameSpeedDelay -= 2;
    } else if (gameSpeedDelay > 25) {
        gameSpeedDelay -= 1;
    }
}

function checkCollision() {
    const head = snake[0];
    
    if (head.x < 1 || head.x > gridSize
        || head.y < 1 || head.y > gridSize) {
        resetGame();
    } 

    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            resetGame();
        }
    }
}

function resetGame() {
    updateHighScore();
    stopGame();
    snake = [{ x:10, y:10 }];
    food = generateFood();
    direction = 'right';
    gameSpeedDelay = 200;
    updateScore();
}

function updateScore() {
    const currentScore = snake.length - 1;
    score.textContent = currentScore.toString().padStart(3, '0')
}

function updateHighScore() {
    const currentScore = snake.length - 1;
    if(currentScore > highScore) {
        highScore = currentScore;
        highScoreText.textContent = highScore.toString().padStart(3, '0');
        highScoreText.style.display = 'block';
    }
}

function stopGame() {
    clearInterval(gameIntervalId);
    gameStarted = false;
    instructionText.style.display = 'block';
    logo.style.display = 'block';
}