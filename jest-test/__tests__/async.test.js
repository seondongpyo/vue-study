function asyncFunction() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Passed!');
        }, 6000);
    });
};

describe('비동기', () => {
    test('async/await', async () => {
        const res = await asyncFunction();
        expect(res).toBe('Passed!');
    }, 7000);
});