// import constants 
import {
    SHOT_AT_DOUBLE,
    DOUBLE_HIT,
    BOBS_SCORE,
    GAMES_PLAYED_COUNTER,
    GAMES_COMPLETED_COUNTER,

}
    from '../constants/action-types';

// import helper functions
import { percentage } from './helpers/helperFunctions';
const initialState = {
    bobs27: {
        shotsAtDouble: 0,
        doublesHit: 0,
        doublePercentage: 0,
        score: 0,
        hiScore: 0,
        gamesPlayed: 0,
        gamesCompleted: 0,
        completionPercentage: 0,
        // averageScore: 0
    }
}

export default (state = initialState, { type, payload, gameType }) => {
    if (gameType === 'bobs27') {
        let score = parseInt(payload)
        switch (type) {
            case SHOT_AT_DOUBLE:
                return {
                    ...state,
                    shotsAtDouble: state.shotsAtDouble + 1,
                    doublePercentage: percentage(state.shotsAtDouble, state.doublesHit)
                }
            case DOUBLE_HIT:
                return {
                    ...state,
                    doublesHit: state.doublesHit + 1
                }
            case BOBS_SCORE:
                return {
                    ...state,
                    score: state.score + score,
                    hiScore: (score > state.hiScore) ? score : state.hiScore
                }
            case GAMES_PLAYED_COUNTER:
                return {
                    ...state,
                    gamesPlayed: state.gamesPlayed + 1,
                    completionPercentage: percentage(state.gamesPlayed, state.gamesCompleted)
                }
            case GAMES_COMPLETED_COUNTER:
                return {
                    gamesCompleted: state.gamesCompleted + 1
                }
            default:
                return state
        }
    } else {
        return state
    }
}
