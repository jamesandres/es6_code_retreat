class Grid {
    constructor() {
        this.points = new Set();
    }
    addPoint(x, y) {
        this.points.add(`${x},${y}`);
    }
    isPointAlive(x, y) {
        const alive = this.points.has(`${x},${y}`);
        return alive ? 1 : 0;
    }
}

export default Grid;