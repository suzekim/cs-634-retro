import feedbacks from '../../src/reducers/feedbacks'

describe('feedback reducer',  () => {
    it('handles initialState', () => {
        expect(
            feedbacks(undefined, {})
        ).toEqual([]);
    });

    it('adds a feedback point', () => {
        expect(
            feedbacks([], {
                type: 'ADD_FEEDBACK',
                text: 'First point!'
            })
        ).toEqual([
            {
                text: 'First point!'
            }
        ]);
    })

    it('adds multiple feedback points', () => {
        expect(
            feedbacks([{
                text: 'First point!'
            }], {
                type: 'ADD_FEEDBACK',
                text: 'Second point!'
            })
        ).toEqual([
            {
                text: 'First point!'
            },
            {
                text: 'Second point!'
            }
        ]);
    });
});