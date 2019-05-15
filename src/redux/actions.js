import {
    SCORE_TO_SUBTRACT, SET_GAME_TYPE
} from './constants/action-types';


export const subtractScore = (activePlayer, score) => ({
    type: SCORE_TO_SUBTRACT,
    payload: {
        activePlayer,
        score
    }
});

export const setGameType = (payload) => ({
    type: SET_GAME_TYPE,
    payload
});
