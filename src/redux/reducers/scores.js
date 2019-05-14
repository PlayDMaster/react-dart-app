import {
    SCORE_TO_SUBTRACT
} from '../constants/action-types';
import { stat } from 'fs';

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
            scoresMade: [],
            markers: {
                tonTo139: 0,
                ton40To169: 0,
                ton70To179: 0,
                ton80: 0
            }
        },
        player2: {
            scoresMade: [],
            markers: {
                tonTo139: 0,
                ton40To169: 0,
                ton70To179: 0,
                ton80: 0
            }
        },
        gameType: 501,
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
                        scoresMade: [...state.scores[activePlayer].scoresMade, parseInt(score)], // add score to list
                        markers: {
                            ...state.scores[activePlayer].markers,
                            tonTo139: (score >= 100 && score <= 139) ?
                                state.scores[activePlayer].markers.tonTo139 + 1 :
                                state.scores[activePlayer].markers.tonTo139,
                            ton40To169: (score >= 140 && score <= 169) ?
                                state.scores[activePlayer].markers.ton40To169 + 1 :
                                state.scores[activePlayer].markers.ton40To169,
                            ton70To179: (score >= 170 && score <= 179) ?
                                state.scores[activePlayer].markers.ton70To179 + 1 :
                                state.scores[activePlayer].markers.ton70To179,
                            ton80: (score == 180) ?
                                state.scores[activePlayer].markers.ton80 + 1 :
                                state.scores[activePlayer].markers.ton80
                        }
                    }
                }
            };
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
