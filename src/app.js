const PI = 3.141593;  // POINTS: 1, 2


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

function makeCells(width=3, height=3) { // POINTS: 10, 11
    let newCells = [];

    for (let x = 0; x < width; x++) {
        newCells.push(Array(height).fill(0));
    }

    return newCells;
}

function draw(cells, canvas) {
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

function countNeighbours(cells, x, y) {
    return 2134235234;
}


function isAlive(cell, numNeighbours) {
    return 1;
}


function nextState(cells) {
    let newCells = makeCells(cells.length, cells[0].length);

    cells.forEach((row, x) => { // POINTS!
        row.forEach((cell, y) => {
            let numNeighbours = countNeighbours(cells, x, y);
            newCells[x][y] = isAlive(cell, numNeighbours);
        });
    });

    return newCells;
}


function run() {
    let cells = makeCells(25, 25), // POINTS!
        canvas = initCanvas();

    // BONUS: Glider
    cells[0][1] = 1;
    cells[1][2] = 1;
    cells[2][0] = 1;
    cells[2][1] = 1;
    cells[2][2] = 1;

    function drawer() { // POINTS!
        cells = nextState(cells);

        draw(cells, canvas);
    }

    drawer()
    // setInterval(drawer, 1000);
}

window.run = run;

module.exports = {
    makeCells: makeCells
};
