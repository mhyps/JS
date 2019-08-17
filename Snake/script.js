//Creating rectangle to fill canvas
const gameCanvas = document.querySelector("#gameCanvas");
const gameCanvasContext = gameCanvas.getContext("2d");
let snake = [
    {x: 200, y: 200},
    {x: 190, y: 200},
    {x: 190, y: 200}
];

let dx = 10;

let dy = 0;

main();

document.addEventListener("keydown", changeDirection);

function main() {
    setTimeout(function onTick() {
        clearCanvas();
        advanceSnake();
        drawSnake();
        main();
    }, 100);
}

function clearCanvas() {
    gameCanvasContext.fillStyle = "white";
    gameCanvasContext.strokeStyle = "black";
    gameCanvasContext.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
    gameCanvasContext.strokeRect(0, 0, gameCanvas.width, gameCanvas.height);

}

function drawSnakePart(snakePart) {
    gameCanvasContext.strokeStyle = "#6832a8";
    gameCanvasContext.fillStyle = "#a993c2";
    gameCanvasContext.fillRect(snakePart.x, snakePart.y, 10, 10);
    gameCanvasContext.strokeRect(snakePart.x, snakePart.y, 10, 10);

}

function changeDirection(event) {
    const LEFT_KEY = "ArrowLeft";
    const RIGHT_KEY = "ArrowRight";
    const UP_KEY = "ArrowUp";
    const DOWN_KEY = "ArrowDown";

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
    snake.pop();
}

function drawSnake() {
    snake.forEach(drawSnakePart);
}
