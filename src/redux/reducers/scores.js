import {
    ADD_NAME,
    SCORE_TO_SUBTRACT
} from '../constants/action-types';

const initialState = {
    playerId: 0,
    playerName: ['Scott', 'Jesse'],
    scoresLeft: [501, 501]
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SCORE_TO_SUBTRACT: {
            const { player, score } = action.payload;
            return {
                ...state,
                ...state.scoresLeft[player] - score
            }
        }
        case ADD_NAME: {
            return { ...state, ...state.playerName.payload }
        }
        default:
            return state;
    }
}