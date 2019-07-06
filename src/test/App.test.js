import React from 'react';
import { shallow } from 'enzyme';
import App from '../main/App';


it('Retro Header', () => {
	const wrapper = shallow(<App />);
	expect(wrapper.contains("Retro")).toEqual(true);
});

describe('Input', function () {
	const wrapper = shallow(<App/>);
	it('has input group for text', () => {
		const inputGroup = wrapper.find('InputGroup').dive();

		expect(inputGroup.hasClass('input-group')).toBe(true);
	});
	it('has placeholder text for feedback', () => {
		const input = wrapper.find('Input');
		const placeholder = input.props().placeholder;

		expect(placeholder).toEqual('What went well? What could have gone better?');
	});
});
