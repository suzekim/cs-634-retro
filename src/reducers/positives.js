const positives = (state = [], action) => {
    switch(action.type) {
        case 'ADD_POSITIVE':
            return [
                ...state,
                {
                    text: action.text
                }
            ]
        default:
            return state
    }
}

export default positives;