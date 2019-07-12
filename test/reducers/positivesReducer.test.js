import positives from '../../src/reducers/positives'

describe('positives reducer',  () => {
    it('handles initialState', () => {
        expect(
            positives(undefined, {})
        ).toEqual([]);
    });

    it('adds a feedback point', () => {
        expect(
            positives([], {
                type: 'ADD_POSITIVE',
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
            positives([{
                text: 'First point!'
            }], {
                type: 'ADD_POSITIVE',
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