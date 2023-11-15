const { calculateNumbers } = require('./skills');

describe('calculateNumbers', () => {
    it('adds two numbers', () => {
        const result = calculateNumbers(1, 2);
        expect(result).toEqual(3);
    });
});