
const topLosers = (state = [], action: any) => {
    switch(action.type) {
        case 'ADD_LOSERS':
            return state = action.payload;
        default:
            return state;
    }
}

export default topLosers;