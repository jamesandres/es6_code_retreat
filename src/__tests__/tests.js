jest.unmock('../app');

describe('initCells', () => {

    // it('loop called with correct values', () => {
    //     const app = require('../app');
    //     app.draw = jest.fn()

    //     app.loop(1, 2)
    //     expect(app.draw).toBecalledWith(1, 2)
    // })

    // it('nextState returns the next state .. obvs', () => {
    //     const app = require('../app');
    //     const cells = app.initCells();

    //     let newCells = app.nextState(cells);

    //     expect(newCells).toBe(
    //         [[1, 0, 1],
    //          [1, 1, 0],
    //          [0, 0, 0]]
    //     );
    // })

    it('countNeighbours returns the correct value', () => {
        const app = require('../app');

        let cells = [[0, 1, 0],
                     [0, 0, 1],
                     [1, 1, 1]];
        expect(app.countNeighbours(cells, 0, 0)).toBe(5)
        expect(app.countNeighbours(cells, 0, 1)).toBe(4)
        expect(app.countNeighbours(cells, 0, 2)).toBe(5)

        expect(app.countNeighbours(cells, 1, 0)).toBe(5)
        expect(app.countNeighbours(cells, 1, 1)).toBe(5)
        expect(app.countNeighbours(cells, 1, 2)).toBe(4)

        // expect(app.countNeighbours(cells, 1, 1)).toBe(5)
    })

    it('isAlive returns true if cell should be alive, false otherwise', () => {
        const app = require('../app');
        const cells = app.initCells();

        expect(app.isAlive(0, 1)).toBe(0);
        expect(app.isAlive(0, 2)).toBe(0);
        expect(app.isAlive(0, 3)).toBe(1);
        expect(app.isAlive(0, 4)).toBe(0);
        expect(app.isAlive(0, 5)).toBe(0);
        expect(app.isAlive(0, 6)).toBe(0);
        expect(app.isAlive(0, 7)).toBe(0);
        expect(app.isAlive(0, 8)).toBe(0);
        expect(app.isAlive(1, 1)).toBe(0);
        expect(app.isAlive(1, 2)).toBe(1);
        expect(app.isAlive(1, 3)).toBe(1);
        expect(app.isAlive(1, 4)).toBe(0);
        expect(app.isAlive(1, 5)).toBe(0);
        expect(app.isAlive(1, 6)).toBe(0);
        expect(app.isAlive(1, 7)).toBe(0);
        expect(app.isAlive(1, 8)).toBe(0);
    })
})
