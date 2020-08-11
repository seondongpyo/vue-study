import { mount, shallowMount } from '@vue/test-utils';
import HelloWorld from '../HelloWorld';

// mount vs. shallowMount
describe('HelloWorld Component Test', () => {
    test('mount', () => {
        const wrapper = mount(HelloWorld);
        console.log(wrapper.html());    // <h1>Hello <span>World!</span></h1>
        expect(wrapper.text()).toBe('Hello World!');    // pass
    });

    test('shallowMount', () => {
        // HelloWorld 외 나머지 하위 컴포넌트들은 가짜로 생성
        const wrapper = shallowMount(HelloWorld);
        console.log(wrapper.html());    // <h1>Hello <message-stub msg="World!"></message-stub>
        // expect(wrapper.text()).toBe('Hello World!');    // fail
        expect(wrapper.text()).toBe('Hello');    // pass
    });
});