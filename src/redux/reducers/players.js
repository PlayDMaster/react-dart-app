import {
    SCORE_TO_SUBTRACT
} from '../constants/action-types';

const initialState = {
    player1: {
        name: 'Scott'
    },
    player2: {
        name: 'Jesse'
    },
    activePlayer: 'player1'
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case SCORE_TO_SUBTRACT:
            const { activePlayer } = payload;
            if (activePlayer === 'player1') {
                return {
                    ...state,
                    activePlayer: 'player2'
                }
            } else {
                return {
                    ...state,
                    activePlayer: 'player1'
                }
            }
        default:
            return state
    }
}
