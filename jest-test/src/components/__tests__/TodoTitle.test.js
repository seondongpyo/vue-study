import { shallowMount } from '@vue/test-utils';
import TodoTitle from '../TodoTitle';
import axios from 'axios';

// Mock 모듈 생성
jest.mock('axios');

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
        axios.get.mockResolvedValue(res);
        wrapper = shallowMount(TodoTitle);
    });

    test('가져온 텍스트를 렌더링', () => {
        expect(wrapper.text()).toBe('delectus aut autem');
    });

    test('호출 여부', () => {
        // expect(axios.get).toHaveBeenCalled();
        const spy = jest.spyOn(wrapper.vm, 'fetchTodo');    // spyOn('스파이를 심을 메서드를 포함하는 객체', '객체에 들어있는 메서드명')
        wrapper.vm.fetchTodo();
        expect(spy).toHaveBeenCalled();
    });
});
