import HamsterModel from "../../models/Hamster";
import Match from "../../models/Match";

export const addMatch = (match: Match[]) => {
    return {
        type: 'ADD_MATCH',
        payload: match
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