import {
    SCORE_TO_SUBTRACT, ADD_NAME
} from './constants/action-types';


export const subtractScore = (playerId, score) => ({
    type: SCORE_TO_SUBTRACT,
    payload: {
        playerId,
        score
    }
});

export const addName = (name) => ({
    type: ADD_NAME,
    payload: name
});

