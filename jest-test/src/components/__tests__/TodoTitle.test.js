import { shallowMount } from '@vue/test-utils';
import TodoTitle from '../TodoTitle';
import axios from 'axios';

describe('TodoTitle Component Test', () => {
    let wrapper;

    beforeEach(() => {
        const res = {
            data: {
                title: 'delectus aut autem'
            }
        };
    
        // Mock 함수 생성
        // axios.get = jest.fn(() => {
        //     return new Promise(resolve => {
        //         resolve(res);
        //     });
        // });        
        axios.get = jest.fn().mockResolvedValue(res);
        wrapper = shallowMount(TodoTitle);
    });

    test('가져온 텍스트를 렌더링', () => {
        expect(wrapper.text()).toBe('delectus aut autem');
    });
});
