import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/App';


it('Retro Header', () => {
	const wrapper = shallow(<App />);
	expect(wrapper.contains("Retro")).toEqual(true);
});
