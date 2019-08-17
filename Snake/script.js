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

function main() {
    setTimeout(function onTick() {
        clearCanvas();
        advanceSnake();
        drawSnake();
        main();
    },100);
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
