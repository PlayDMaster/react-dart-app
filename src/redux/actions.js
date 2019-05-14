import {
    SCORE_TO_SUBTRACT
} from './constants/action-types';


export const subtractScore = (activePlayer, score) => ({
    type: SCORE_TO_SUBTRACT,
    payload: {
        activePlayer,
        score
    }
});
