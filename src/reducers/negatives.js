const negatives = (state = [], action) => {
    switch(action.type) {
        case 'ADD_NEGATIVE':
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

export default negatives;