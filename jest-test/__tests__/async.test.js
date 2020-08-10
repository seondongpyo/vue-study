function asyncFunction() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Passed!');
        }, 1000);
    });
};

describe('비동기', () => {
    test('done', (done) => {
        asyncFunction().then(res => {
            expect(res).toBe('Passed!');

            // done이 호출될 때까지 테스트는 최대 5초까지 대기
            // 매개변수로 done을 넘겨줄 땐 반드시 done을 호출해야 함
            done(); 
        });
    });
});