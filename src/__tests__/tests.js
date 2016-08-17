jest.unmock('../app');

describe('initCells', () => {
    it('has a cell alive', () => {
        const app = require('../app');
        expect(app.initCells()[1][1]).toBe(1)
    })

    it('has that same cell dead', () => {
        const app = require('../app');
        expect(app.initCells()[1][1]).toBe(0)
    })
})
