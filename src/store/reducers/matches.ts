

const matches = (state = [], action: any) => {
    switch(action.type) {
        case 'ADD_MATCH':
            return state = action.payload;
        default:
            return state;
    }
}

export default matches;