import { addOne } from '../calculator';

// test('테스트 이름', '콜백함수')
test('인수가 숫자인 경우', () => {
    // expect('실행할 함수 또는 값').toBe('기대값')
    expect(addOne(2)).toBe(3);
    expect(addOne(7)).toBe(8);
});

test('인수가 문자인 경우', () => {
    expect(addOne('2')).toBe(3);
    expect(addOne('77')).toBe(78);
});