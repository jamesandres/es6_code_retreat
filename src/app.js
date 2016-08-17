const cellSize = 15;
const cellsHoriz = 60;
const cellsVert = 30;
const numRows = 5;
const numCols = 5;

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
    let cells = [];

    for (var x = 0; x < numRows; x++) {
        cells[x] = Array(numCols).fill(0);
    }

    return cells;
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
                console.log("fill", x, y, cell);
                canvas.fill();
            } else {
                console.log("stroke", x, y, cell);
                canvas.stroke();
            }
        });
    });
    console.log("Drawing..");
}


function numNeighbours(cells, x, y) {
    let neighbours = 0;
    for (let dx = -1; dx <= 1; dx ++) {
        let i = x + dx;
        if (i < 0) {
            i = numRows - 1;
        }
        if (i >= numRows) {
            i = 0;
        }

        for (let dy = -1; dy <= 1; dy ++) {
            let j = y + dy;
            if (j < 0) {
                j = numCols - 1;
            }
            if (j >= numCols) {
                j = 0;
            }

            neighbours += cells[i][j];
        }
    }

    return neighbours;
}


function step(cells, canvas) {
    let newCells = makeCells();

    cells.forEach((row, x) => {
        row.forEach((cell, y) => {
            let neighbours = numNeighbours(cells, x, y);
            if (cell) {
                if (neighbours >= 2 || neighbours <= 3) {
                    newCells[x][y] = 1;
                } else {
                    newCells[x][y] = 0;
                }
            } else {
                if (neighbours === 3) {
                    newCells[x][y] = 1;
                } else {
                    newCells[x][y] = 0;
                }
            }

        });
    });
    cells = newCells;


    draw(cells, canvas);
}


function run() {
    let cells = makeCells();
    let canvas = initCanvas();
    console.log(cells);
    cells[2][2] = 1; // LAME.

    // step(cells, canvas)
    setInterval(function () {step(cells, canvas)}, 1000);
}

window.run = run;

module.exports = {
    makeCells: makeCells
};
