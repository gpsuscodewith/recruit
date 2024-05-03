const Solution = require('./solution');

describe('Solution', () => {
    test('finds indices that sum to the target', () => {
        const solution = new Solution();
        expect(solution.twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
        expect(solution.twoSum([3, 2, 4], 6)).toEqual([1, 2]);
        expect(solution.twoSum([3, 3], 6)).toEqual([0, 1]);
    });
});
