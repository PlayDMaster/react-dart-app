import {
    SCORE_TO_SUBTRACT
} from '../constants/action-types';

const initialState = {
    player1: {
        scoresMade: [],
        markers: {
            tonTo139: 0,
            ton40To169: 0,
            ton70To179: 0,
            ton80: 0,
            average: 0
        }
    },
    player2: {
        scoresMade: [],
        markers: {
            tonTo139: 0,
            ton40To169: 0,
            ton70To179: 0,
            ton80: 0,
            average: 0
        }
    }
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case SCORE_TO_SUBTRACT:
            const { activePlayer, score } = payload;

            const computedAverage = () => {
                let sum = state[activePlayer].scoresMade.reduce((acc, curr) => {
                    return acc + curr;
                }, 0);
                if (!sum) {
                    return parseInt(score);
                } else {
                    return ((sum + parseInt(score)) / (state[activePlayer].scoresMade.length + 1))
                }
            };

            return {
                ...state, // copy state
                [activePlayer]: { // choose specific player object
                    ...state[activePlayer], // copy specific players properties
                    scoresMade: [...state[activePlayer].scoresMade, parseInt(score)], // add score to list
                    markers: {
                        ...state[activePlayer].markers, // copy marker properties
                        tonTo139: (score >= 100 && score <= 139) ?  // count by 1 if criteria is met for each property
                            state[activePlayer].markers.tonTo139 + 1 :
                            state[activePlayer].markers.tonTo139,
                        ton40To169: (score >= 140 && score <= 169) ?
                            state[activePlayer].markers.ton40To169 + 1 :
                            state[activePlayer].markers.ton40To169,
                        ton70To179: (score >= 170 && score <= 179) ?
                            state[activePlayer].markers.ton70To179 + 1 :
                            state[activePlayer].markers.ton70To179,
                        ton80: (score == 180) ?
                            state[activePlayer].markers.ton80 + 1 :
                            state[activePlayer].markers.ton80,
                        average: computedAverage() // compute average each time a score is input
                    }
                }
            }
        default:
            return state;
    }
}

