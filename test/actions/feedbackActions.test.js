import {addPositive, addNegative, addAction} from '../../src/actions/feedbackActions';

describe('feedbackActions', function () {
    it('addPositive creates ADD_POSITIVE action', () => {
        expect(addPositive('Great demo')).toEqual({
            type: 'ADD_POSITIVE',
            text: 'Great demo'
        })
    });
    it('addNegative creates ADD_NEGATIVE action', () => {
        expect(addNegative('Too many meetings')).toEqual({
            type: 'ADD_NEGATIVE',
            text: 'Too many meetings'
        })
    });
    it('addAction creates ADD_ACTION action', () => {
        expect(addAction('Schedule fewer meetings')).toEqual({
            type: 'ADD_ACTION',
            text: 'Schedule fewer meetings'
        })
    });
});