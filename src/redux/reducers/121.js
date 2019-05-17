// import contants
import {
    SCORE_TO_SUBTRACT,
    GAMES_PLAYED_COUNTER,
    GAMES_COMPLETED_COUNTER,
    SHOT_AT_DOUBLE,
    DOUBLE_HIT,
    INCREMENT_LIVES,
    DECREMENT_LIVES
} from '../constants/action-types';

// import functions
import { percentage } from './helpers/helperFunctions';

const initialState = {
    scoresMade: [],
    successPercentage: 0,
    checkoutPercentage: 0,
    shotsAtDouble: 0,
    doublesHit: 0,
    hiFinish: 0,
    lives: 0,
    gamesPlayed: 0,
    gamesCompleted: 0
}

export default (state = initialState, { type, payload, gameType }) => {
    if (gameType == 121) {
        const score = parseInt(payload)
        switch (type) {
            case SCORE_TO_SUBTRACT:
                return {
                    ...state,
                    scoresMade: [...state.scoresMade, score]
                }
            case GAMES_PLAYED_COUNTER:
                return {
                    ...state,
                    gamesPlayed: state.gamesPlayed + 1,
                    successPercentage: percentage(state.gamesPlayed, state.GamesCompleted)
                }
            case GAMES_COMPLETED_COUNTER:
                return {
                    ...state,
                    gamesCompleted: state.gamesCompleted + 1
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
                    hiFinish: (score > state.hiFinish) ? score : state.hiFinish
                }
            case INCREMENT_LIVES:
                return {
                    ...state,
                    lives: state.lives + 1
                }
            case DECREMENT_LIVES:
                return {
                    ...state,
                    lives: (state.lives > 0) ? state.lives - 1 : state.lives
                }
            default:
                return state
        }
    } else {
        return state
    }
}
