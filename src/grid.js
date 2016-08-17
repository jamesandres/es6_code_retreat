class Grid {
    constructor() {
        this.points = new Set();
    }

    getPoints() {
        return Array.from(this.points).map((p) => {
            let bits = p.split(',');
            return [parseInt(bits[0], 10), parseInt(bits[1], 10)]
        });
    }

    getBounds() {
        // return({minX: 0, minY: 0, maxX: 10, maxY: 10});
        let minX = 0;
        let minY = 0;
        let maxX = 0;
        let maxY = 0;
        this.getPoints().forEach(([x, y]) => {
            minX = Math.min(x, minX);
            minY = Math.min(y, minY);
            maxX = Math.max(x, maxX);
            maxY = Math.max(y, maxY);
        });
        minX -= 1;
        minY -= 1;
        maxX += 1;
        maxY += 1;
        return({minX,minY, maxX,maxY});
    }

    addPoint(x, y) {
        this.points.add(`${x},${y}`);
    }

    isPointAlive(x, y) {
        const alive = this.points.has(`${x},${y}`);
        return alive ? 1 : 0;
    }

    countNeighbours(x, y) {
        let count = 0;

        for (let dx=-1; dx <= 1; dx++) {
            for (let dy=-1; dy <= 1; dy++) {
                let i = x + dx,
                    j = y + dy;

                if (i === x && j === y) {
                    continue;
                }

                count += this.isPointAlive(i, j);
            }
        }

        return count
    }
}

export default Grid;