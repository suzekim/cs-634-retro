import actions from '../../src/reducers/actions'

describe('actions reducer',  () => {
    it('handles initialState', () => {
        expect(
            actions(undefined, {})
        ).toEqual([]);
    });

    it('adds a feedback point', () => {
        expect(
            actions([], {
                type: 'ADD_ACTION',
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
            actions([{
                text: 'First point!'
            }], {
                type: 'ADD_ACTION',
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