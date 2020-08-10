const can1 = {
    content: 'tuna',
    corporation: 'Dongwon'
};

const can2 = {
    content: 'tuna',
    corporation: 'Dongwon'
};

describe('equal test', () => {
    test('모든 프로퍼티 동일 여부', () => {
        expect(can1).toEqual(can2);
    });

    // test('객체 간 비교는 toBe로 하면 안 됨', () => {
    //     expect(can1).toBe(can2);
    // })
});