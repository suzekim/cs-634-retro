import React from 'react';
import { shallow } from 'enzyme';
import App from '../main/App';

it('renders Retro header', () => {
	const wrapper = shallow(<App />);
	expect(wrapper.contains("Retro")).toEqual(true);
});