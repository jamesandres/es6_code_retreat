const cellSize = 15,
      cellsHoriz = 60,
      cellsVert = 30

function initCanvas() {
    let canvasEl = document.getElementById('canvas'),
        canvas = canvasEl.getContext('2d');

    canvasEl.width = cellSize * cellsHoriz;
    canvasEl.height = cellSize * cellsVert;

    canvas.strokeStyle = '#e1e1e1';
    canvas.fillStyle = 'cadetblue';

    return canvas
}

function initCells(w, h) {
    let cells= [[0, 0, 0],
                [0, 1, 0],
                [0, 0, 0]];
    let newCells = [];
    for (let x = 0; x < w; x++) {
        newCells[x] = [];
        for (let y = 0; y < h; y++) {
            newCells[x][y] = 0;
        }
    }

    return newCells;
}

function countNeighbours(cells, x, y) {
    let count = 0;

    for (let dx=-1; dx <= 1; dx++) {
        for (let dy=-1; dy <= 1; dy++) {
            let i = (x + dx + cells.length) % cells.length,
                j = (y + dy + cells[0].length) % cells[0].length;

            if (i === x && j === y) {
                continue;
            }

            count += cells[i][j];
        }
    }

    return count
}

function isAlive(cell, numNeighbours) {
    switch (cell) {
        case 1:
            if (numNeighbours < 2 || numNeighbours > 3) {
                return 0
            }
            else {
                return 1;
            }
        case 0:
            if (numNeighbours === 3) {
                return 1;
            }
            else {
                return 0;
            }
        default:
            return 0;
    }
}

function nextState(cells) {
    let newCells = initCells(cells.length, cells[0].length);

    cells.forEach((row, x) => {
        row.forEach((cell, y) => {
            let numNeighbours = countNeighbours(cells, x, y);
            newCells[x][y] = isAlive(cell, numNeighbours);
        });
    });

    return newCells;
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
}

function run() {
    let cells = initCells(20, 20),
        canvas = initCanvas();

    cells[0][1] = 1;
    cells[1][2] = 1;
    cells[2][0] = 1;
    cells[2][1] = 1;
    cells[2][2] = 1;

    setInterval(function () {
        cells = nextState(cells);
        draw(cells, canvas)
    }, 200);
}

window.run = run;

module.exports = {
    initCells: initCells
};
