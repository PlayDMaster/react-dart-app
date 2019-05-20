// import constants
import { SCORE_TO_SUBTRACT, SHOT_AT_DOUBLE, DOUBLE_HIT, NEW_GAME } from '../constants/action-types';

// import functions
import { percentage, computedAverage, counter } from './helpers/helperFunctions';

const initialState = {
    scoresMade: {
    },
    tonTo139: 0,
    ton40To169: 0,
    ton70To179: 0,
    ton80: 0,
    average: 0,
    hiFinish: 0,
    shotsAtDouble: 0,
    doublesHit: 0,
    checkoutPercentage: 0,
    scoreLeft: 501,
    gameId: 0
}

export default (state = initialState, { type, payload, gameType, gameId }) => {
    if (gameType === '501') {
        const score = parseInt(payload)
        switch (type) {
            case NEW_GAME:
                return {
                    ...state,
                    scoresMade: {
                        ...state.scoresMade,
                        [gameId]: []
                    }
                }
            case SCORE_TO_SUBTRACT:
                return {
                    ...state,
                    scoresMade: {
                        ...state.scoresMade,
                        [gameId]: [
                            ...state.scoresMade[gameId],
                            score
                        ]
                    },
                    tonTo139: counter(score, 100, 139, state.tonTo139),
                    ton40To169: counter(score, 140, 169, state.ton40To169),
                    ton70To179: counter(score, 170, 179, state.ton70To179),
                    ton80: counter(score, 180, 180, state.ton80),
                    average: computedAverage(state.scoresMade, score, gameId),
                    scoreLeft: state.scoreLeft - score
                }
            case SHOT_AT_DOUBLE:
                return {
                    ...state,
                    shotsAtDouble: state.shotsAtDouble + 1,
                    checkoutPercentage: percentage(state.shotsAtDouble, state.doublesHit)
                }
            case DOUBLE_HIT:
                return {
                    ...state,
                    doublesHit: state.doublesHit + 1,
                    hiFinish: (score > state.hiFinish) ? score : state.hiFinish,
                    gameId: state.gameId + 1,
                    scoreLeft: 501
                }
            default:
                return state
        }
    } else {
        return state
    }
}
