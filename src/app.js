var canvasEl = document.getElementById('canvas'),
    canvas = canvasEl.getContext('2d'),
    cellSize = 15,
    cellsHoriz = 60,
    cellsVert = 30;

canvasEl.width = cellSize * cellsHoriz;
canvasEl.height = cellSize * cellsVert;

canvas.strokeStyle = '#e1e1e1';
canvas.fillStyle = 'cadetblue';


function populateCells(cells) {
    var cells = []
    for (var i=0; i<cellsHoriz; i++) {
        cells[i] = [];
        for (var j=0; j<cellsVert; j++) {
            cells[i][j] = 0;
        }
    }
    cells[2][3] = 1
    return cells
}


function draw(cells) {
    canvas.clearRect(0, 0, cellSize * cellsVert, cellSize * cellsHoriz);
    cells.forEach(function(row, x) {
        row.forEach(function(cell, y) {
            canvas.beginPath();
            canvas.rect(x*cellSize, y*cellSize, cellSize, cellSize);
            if (cell) {
                canvas.fill();
            } else {
                canvas.stroke();
            }
        });
    });

}

draw(populateCells())
