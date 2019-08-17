//Creating rectangle to fill canvas
const gameCanvas = document.querySelector("#gameCanvas");
const gameCanvasContext = gameCanvas.getContext("2d");

let snake = [
    {x: 200, y: 200},
    {x: 190, y: 200},
    {x: 190, y: 200}
];

const GAME_SPEED = 100;
const CANVAS_BORDER_COLOUR = '#000';
const CANVAS_BACKGROUND_COLOUR = "#FFF";
const SNAKE_COLOUR = "#a993c2";
const SNAKE_BORDER_COLOUR = "#6832a8";
const FOOD_COLOUR = "#4287f5";
const FOOD_BORDER_COLOUR = '#112b54';

let dx = 10;
let dy = 0;
let foodX;
let foodY;
let score = 0;
let changingDirection = false;

main();
createFood();
document.addEventListener("keydown", changeDirection);

function main() {
    if (didGameEnd()) return;
    setTimeout(function onTick() {
        changingDirection = false;
        clearCanvas();
        drawFood();
        advanceSnake();
        drawSnake();
        main();
    }, GAME_SPEED);
}

function clearCanvas() {
    gameCanvasContext.fillStyle = CANVAS_BACKGROUND_COLOUR;
    gameCanvasContext.strokeStyle = CANVAS_BORDER_COLOUR;
    gameCanvasContext.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
    gameCanvasContext.strokeRect(0, 0, gameCanvas.width, gameCanvas.height);

}

function drawSnakePart(snakePart) {
    gameCanvasContext.strokeStyle = SNAKE_BORDER_COLOUR;
    gameCanvasContext.fillStyle = SNAKE_COLOUR;
    gameCanvasContext.fillRect(snakePart.x, snakePart.y, 10, 10);
    gameCanvasContext.strokeRect(snakePart.x, snakePart.y, 10, 10);

}

function changeDirection(event) {
    const LEFT_KEY = "ArrowLeft";
    const RIGHT_KEY = "ArrowRight";
    const UP_KEY = "ArrowUp";
    const DOWN_KEY = "ArrowDown";

    if (changingDirection) return;
    changingDirection = true;

    const keyPressed = event.key;
    const goingUp = dy === -10;
    const goingDown = dy === 10;
    const goingRight = dx === 10;
    const goingLeft = dx === -10;

    if (keyPressed === LEFT_KEY && !goingRight) {
        dx = -10;
        dy = 0;
    }
    if (keyPressed === RIGHT_KEY && !goingLeft) {
        dx = 10;
        dy = 0;
    }
    if (keyPressed === UP_KEY && !goingDown) {
        dx = 0;
        dy = -10;
    }
    if (keyPressed === DOWN_KEY && !goingUp) {
        dx = 0;
        dy = 10;
    }

}

function advanceSnake() {
    const head = {
        x: snake[0].x + dx,
        y: snake[0].y + dy
    };
    snake.unshift(head);
    const didEatFood = snake[0].x === foodX && snake[0].y === foodY;
    if (didEatFood) {
        createFood();
        score += 10;
        document.querySelector("#score").innerHTML = score;
    } else {
        snake.pop();
    }

}

function drawSnake() {
    snake.forEach(drawSnakePart);
}

function drawFood() {
    gameCanvasContext.fillStyle = FOOD_COLOUR;
    gameCanvasContext.strokeStyle = FOOD_BORDER_COLOUR;
    gameCanvasContext.fillRect(foodX, foodY, 10, 10);
    gameCanvasContext.strokeRect(foodX,foodY,10,10);
}

function randomTen(min, max) {
    return Math.round((Math.random() * (max - min) + min) / 10) * 10;
}

function createFood() {
    foodX = randomTen(0, gameCanvas.width - 10);
    foodY = randomTen(0, gameCanvas.height - 10);
    snake.forEach(function isFoodOnSnake(part) {
        const foodIsOnSnake = part.x == foodX && part.y == foodY;
        if (foodIsOnSnake)
            createFood();
    });
}

function didGameEnd() {
    for (let i = 3; i < snake.length; i++) {
        const didCollide = snake[i].x === snake[0].x && snake[i].y === snake[0].y;
        if (didCollide) return true;
    }
    const hitLeftWall = snake[0].x < 0;
    const hitRightWall = snake[0].x > gameCanvas.width - 10;
    const hitTopWall = snake[0].y < 0;
    const hitBottomWall = snake[0].y > gameCanvas.height - 10;

    return hitLeftWall || hitRightWall || hitTopWall || hitBottomWall

}
