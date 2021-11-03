
const topWinners = (state = [], action: any) => {
    switch(action.type) {
        case 'ADD_WINNERS':
            return state = action.payload;
        default:
            return state;
    }
}

export default topWinners;