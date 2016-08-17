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

function initCells() {
    return [[0, 0, 0],
            [0, 1, 0],
            [0, 0, 0]];
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
    let cells = initCells(),
        canvas = initCanvas();
    draw(cells, canvas)
}

window.run = run;

module.exports = {
    initCells: initCells
};
