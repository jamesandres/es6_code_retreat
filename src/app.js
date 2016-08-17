const cellSize = 15, // POINTS: 1, 2
      cellsHoriz = 60,
      cellsVert = 30


export function initCanvas() { // POINTS: 33, 34
    let canvasEl = document.getElementById('canvas'),
        canvas = canvasEl.getContext('2d');

    canvasEl.width = cellSize * cellsHoriz;
    canvasEl.height = cellSize * cellsVert;

    canvas.strokeStyle = '#e1e1e1';
    canvas.fillStyle = 'cadetblue';

    return canvas
}

export function makeCells(width=3, height=3) { // POINTS: 10, 11
    let newCells = []; // POINTS: 3, 4

    for (let x = 0; x < width; x++) {
        newCells.push(Array(height).fill(0));
    }

    return newCells;
}

export function draw(cells, canvas) {
    /*
    cells: an array of arrays, with truthy values being alive and falsey values
    being dead.
    canvas: a 2d canvas object
    */
    canvas.clearRect(0, 0, cellSize * cellsVert, cellSize * cellsHoriz);
    cells.forEach((row, x) => { // POINT: 6, 8
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

export function countNeighbours(cells, x, y) {
    let count = 0;

    for (let dx=-1; dx <= 1; dx++) {
        for (let dy=-1; dy <= 1; dy++) {
            let i = (x + dx + cells.length) % cells.length,
                j = (y + dy + cells[0].length) % cells[0].length;

            if (i===x && j==y) {
                continue;
            }

            count += cells[i][j];
        }
    }

    return count;
}


export function isAlive(cell, numNeighbours) {
    if (cell === 1) {
        if (numNeighbours < 2 || numNeighbours > 3) {
            return 0;
        }
        else {
            return 1;
        }
    } else {
        if (numNeighbours === 3) {
            return 1;
        }
        else {
            return 0;
        }
    }
}


export function nextState(cells) {
    let newCells = makeCells(cells.length, cells[0].length),
        totalNeighbours = 0;

    cells.forEach((row, x) => { // POINTS!
        row.forEach((cell, y) => {
            let numNeighbours = countNeighbours(cells, x, y);
            totalNeighbours += numNeighbours;

            newCells[x][y] = isAlive(cell, numNeighbours);
        });
    });

    // POINTS: 14, 15
    console.log(`Currently there are ${totalNeighbours} neighbours!`);

    return newCells;
}


export function run() {
    let cells = makeCells(25, 25), // POINTS!
        canvas = initCanvas();

    // BONUS: Glider
    cells[0][1] = 1;
    cells[1][2] = 1;
    cells[2][0] = 1;
    cells[2][1] = 1;
    cells[2][2] = 1;

    // BONUS: Blinker
    cells[10][10] = 1;
    cells[10][11] = 1;
    cells[10][12] = 1;

    function drawer() { // POINTS: 3, 5
        cells = nextState(cells);

        draw(cells, canvas);
    }

    // drawer()
    setInterval(drawer, 200);
}

window.run = run;

// POINTS: 23, 24
module.exports = {cellSize, cellsHoriz, cellsVert};
