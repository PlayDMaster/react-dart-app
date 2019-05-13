import {
    SCORE_TO_SUBTRACT
} from '../constants/action-types';

const initialState = {
    playerName: ['Scott', 'Jesse'],
    scoresLeft: [501, 501],
    playerId: 0
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SCORE_TO_SUBTRACT: {
            const { playerId, score } = action.payload;
            return {
                ...state,
                scoresLeft: [
                    ...state.scoresLeft.map((value, index) => {
                        if (index === playerId) {
                            return value - parseInt(score)
                        }
                        return value;
                    })
                ],
                playerId: (playerId) ? state.playerId - 1 : state.playerId + 1
            }
        }
        default:
            return state;
    }
}