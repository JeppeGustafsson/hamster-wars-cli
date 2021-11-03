import HamsterModel from '../../models/Hamster';

const hamsters = (state: HamsterModel[] = [], action: any) => {
    switch(action.type) {
        case 'ADD_HAMSTERS':
            return state = action.payload;
        default:
            return state;
    }
}

export default hamsters;