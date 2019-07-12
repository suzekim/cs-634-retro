import negatives from '../../src/reducers/negatives'

describe('negatives reducer',  () => {
    it('handles initialState', () => {
        expect(
            negatives(undefined, {})
        ).toEqual([]);
    });

    it('adds a feedback point', () => {
        expect(
            negatives([], {
                type: 'ADD_NEGATIVE',
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
            negatives([{
                text: 'First point!'
            }], {
                type: 'ADD_NEGATIVE',
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