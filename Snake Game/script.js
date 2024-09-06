//html elements
const board = document.getElementById("gameboard");

//variables
let snake = [{ x: 10, y:10 }]


//draw game
function draw() {
    board.innerHTML = '';
    drawSnake();
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
// draw();