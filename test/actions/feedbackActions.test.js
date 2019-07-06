import {addFeedback} from '../../src/actions/feedbackActions';

describe('feedbackActions', function () {
    it('addFeedback creates ADD_FEEDBACK action', () => {
        expect(addFeedback('Too many meetings')).toEqual({
            type: 'ADD_FEEDBACK',
            text: 'Too many meetings'
        })
    });
});