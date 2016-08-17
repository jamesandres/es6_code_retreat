const cellSize = 15;
const cellsHoriz = 60;
const cellsVert = 30;
const numRows = 27;
const numCols = 27;

function initCanvas() {
    let canvasEl = document.getElementById('canvas'),
        canvas = canvasEl.getContext('2d');

    canvasEl.width = cellSize * cellsHoriz;
    canvasEl.height = cellSize * cellsVert;

    canvas.strokeStyle = '#e1e1e1';
    canvas.fillStyle = 'cadetblue';

    return canvas
}

function makeCells() {
    return Array(numRows).fill(Array(numCols).fill(0));
}


function draw(cells, canvas) {
    /*
    cells: an array of arrays, with truthy values being alive and falsey values
    being dead.
    canvas: a 2d canvas object
    */
    canvas.clearRect(0, 0, cellSize * cellsVert, cellSize * cellsHoriz);
    cells.forEach((row, x) => {
        row.forEach((cell, y) => {
            canvas.beginPath();
            canvas.rect(y * cellSize, x * cellSize, cellSize, cellSize);
            if (cell) {
                canvas.fill();
            } else {
                canvas.stroke();
            }
        });
    });
    console.log("Hello");
}


function findNeighbours(x, y) {

};


function step(cells, canvas) {
    let newCells = makeCells();

    cells.forEach((row, x) => {
        row.forEach((cell, y) => {
            // 1. Find neighbours
            // 2. Calculate population
            // 3. Is live or dead?
            // 4. Set newCells[x][y] to newState
        });
    });
    cells = newCells;


    var drawIfNecessary = function () {
            draw(cells, canvas);
        };
    requestAnimationFrame(drawIfNecessary);
}


function run() {
    let cells = makeCells();
    let canvas = initCanvas();
    cells[5][5] = 1; // LAME.

    setInterval(function () {step(cells, canvas)}, 1000);
}

window.run = run;

module.exports = {
    makeCells: makeCells
};
