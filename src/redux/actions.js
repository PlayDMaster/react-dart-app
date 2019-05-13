import {
    SCORE_TO_SUBTRACT
} from './constants/action-types';


export const subtractScore = (playerId, score) => ({
    type: SCORE_TO_SUBTRACT,
    payload: {
        playerId,
        score
    }
});

