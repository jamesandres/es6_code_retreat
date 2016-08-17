import Grid from './grid';

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

function nextState(grid) {
    let newGrid = new Grid();

    let {minX,minY,maxX,maxY} = grid.getBounds()
    for (let x = minX; x <= maxX; x++) {
        for (let y = minY; y <= maxY; y++) {
            let numNeighbours = grid.countNeighbours(x, y);

            if (isAlive(grid.isPointAlive(x, y), numNeighbours)) {
                newGrid.addPoint(x, y);
            }
        }
    }

    return newGrid;
}

function draw(grid, canvas) {
    /*
    cells: an array of arrays, with truthy values being alive and falsey values
    being dead.
    canvas: a 2d canvas object
    */
    canvas.clearRect(0, 0, cellSize * cellsVert, cellSize * cellsHoriz);


    let {minX,minY,maxX,maxY} = grid.getBounds()
    for (let i = minX; i <= maxX; i++) {
        for (let j = minY; j <= maxY; j++) {
            canvas.beginPath();
            canvas.rect(j * cellSize, i * cellSize, cellSize, cellSize);
            if (grid.isPointAlive(i, j)) {
                canvas.fill();
            } else {
                canvas.stroke();
            }
        }
    }
}

function run() {
    let grid = new Grid(),
        canvas = initCanvas();

    // GLIDER
    grid.addPoint(0, 1);
    grid.addPoint(1, 2);
    grid.addPoint(2, 0);
    grid.addPoint(2, 1);
    grid.addPoint(2, 2);

    // // GLIDER 2
    // grid.addPoint(0, 8);
    // grid.addPoint(1, 9);
    // grid.addPoint(2, 7);
    // grid.addPoint(2, 8);
    // grid.addPoint(2, 9);

    // // Blinker
    // grid.addPoint(1, 6);
    // grid.addPoint(1, 7);
    // grid.addPoint(1, 8);

    setInterval(function () {
        grid = nextState(grid);
        draw(grid, canvas)
    }, 200);
}

window.run = run;
