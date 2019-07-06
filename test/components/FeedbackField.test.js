import {expect} from '../testHelper'
import React from 'react';
import { shallow, mount } from 'enzyme';
import FeedbackField from '../../src/components/FeedbackField';
import * as sinon from 'sinon';


describe('Input', function () {
    it('has placeholder text for feedback', () => {
        const wrapper = shallow(<FeedbackField/>);
        const placeholder = wrapper.props().placeholder;

        expect(placeholder).equal('What went well? What could have gone better?');
    });

    it('dispatches addFeedback when entered', () => {
        const addFeedbackSpy = sinon.spy();
        const wrapper = mount(<FeedbackField {...{addFeedback: addFeedbackSpy }}/>);
        wrapper.simulate('keypress', {key: 'Enter'});

        expect(addFeedbackSpy).calledOnce;
    })
});