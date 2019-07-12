const actions = (state = [], action) => {
    switch(action.type) {
        case 'ADD_ACTION':
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

export default actions;