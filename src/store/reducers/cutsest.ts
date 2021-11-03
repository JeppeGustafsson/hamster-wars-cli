import HamsterModel from '../../models/Hamster';

const cutest = (state: HamsterModel[] = [], action: any) => {
    switch(action.type) {
        case 'ADD_CUTEST':
            return state = action.payload;
        default:
            return state;
    }
}

export default cutest;