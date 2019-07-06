const feedbacks = (state = [], action) => {
    switch(action.type) {
        case 'ADD_FEEDBACK':
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

export default feedbacks;