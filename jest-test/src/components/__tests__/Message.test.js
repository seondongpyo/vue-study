import { shallowMount } from '@vue/test-utils';
import Message from '../Message';

describe('Message Component Test', () => {
    test('1', () => {
        const wrapper = shallowMount(Message);
        const wrapperArray = wrapper.findAll('div > *');    // div의 모든 자식 요소

        expect(wrapperArray.length).toBe(3);
        expect(wrapperArray.at(0).text()).toBe('1');
        expect(wrapperArray.at(1).text()).toBe('2');
        expect(wrapperArray.at(2).text()).toBe('3');
        expect(wrapperArray.at(0).element.tagName).toBe('SPAN');
        expect(wrapperArray.at(1).element.tagName).toBe('H1');
        expect(wrapperArray.at(2).element.tagName).toBe('P');
    });
});