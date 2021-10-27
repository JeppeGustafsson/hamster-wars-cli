import HamsterModel from "../../models/Hamster";

export const addMatch = (hamster: HamsterModel) => {
    return {
        type: 'ADD_MATCH',
        payload: hamster
    }
}