import HamsterModel from "../../models/Hamster";

export const addMatch = (hamster: HamsterModel[]) => {
    return {
        type: 'ADD_MATCH',
        payload: hamster
    }
}

export const addHamsters = (hamster: HamsterModel[]) => {
    return {
        type: 'ADD_HAMSTERS',
        payload: hamster
    }
}

export const addCutest = (hamster: HamsterModel[]) => {
    return {
        type: 'ADD_CUTEST',
        payload: hamster
    }
}

export const addWinners = (hamster: HamsterModel[]) => {
    return {
        type: 'ADD_WINNERS',
        payload: hamster
    }
}

export const addLosers = (hamster: HamsterModel[]) => {
    return {
        type: 'ADD_LOSERS',
        payload: hamster
    }
}