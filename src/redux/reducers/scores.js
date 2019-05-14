import {
    SCORE_TO_SUBTRACT
} from '../constants/action-types';

const initialState = {
    players: {
        player1: {
            name: 'Scott'
        },
        player2: {
            name: 'Jesse'
        },
        activePlayer: 'player1'
    },
    scores: {
        player1: {
            scoreLeft: 501,
            scoresMade: []
        },
        player2: {
            scoreLeft: 501,
            scoresMade: []
        },
        gameType: 501
    }
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SCORE_TO_SUBTRACT:
            const { activePlayer, score } = action.payload;
            const newState = {
                ...state, // copy state
                scores: { // copy scores
                    ...state.scores,
                    [activePlayer]: { // choose specific player object
                        ...state.scores[activePlayer], // copy specific players properties
                        scoreLeft: state.scores[activePlayer].scoreLeft - parseInt(score),
                        scoresMade: [...state.scores[activePlayer].scoresMade, parseInt(score)] // add score to list
                    }
                }
            }
            if (activePlayer === 'player1') {
                return {
                    ...newState,
                    players: {
                        ...state.players,
                        activePlayer: 'player2'
                    }
                }
            } else {
                return {
                    ...newState,
                    players: {
                        ...state.players,
                        activePlayer: 'player1'
                    }
                }
            }
        default:
            return state;
    }
}
