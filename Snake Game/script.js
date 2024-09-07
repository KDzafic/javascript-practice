//html elements
const board = document.getElementById("gameboard");

//variables
//grid-area:10/10 in center 20x20 is the size of the board
const gridSize = 20;
let snake = [{ x: 10, y:10 }]
let food = generateFood();
let direction = 'right';
let gameIntervalId;
let gameSpeedDelay = 200;
let gameStarted = false;


//draw game
function draw() {
    board.innerHTML = '';
    drawSnake();
    drawFood();
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

//Testing
draw();

//create food function
function drawFood() {
    const foodElement = createGameElement('div', 'food');
    setPosition(foodElement, food);
    board.appendChild(foodElement);
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
        clearInterval(); //resets the movement and move to not have bugs
        gameIntervalId = setInterval(() => {
            move();
            draw();// to see the new changes new position
        }, gameSpeedDelay) // when it becomes biger increase the speed
    } else {
        snake.pop(); //this will remove 10 10 if 10 10 remains the snake will just grow it will not move
    }
}

//test moving
// setInterval(() => {
//     move(); 
//     draw(); // to see the new changes new position
// },200);

function startGame() {
    gameStarted = true; // keep track of running game
}