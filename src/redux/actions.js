import {
    SCORE_TO_SUBTRACT,
    SET_GAME_TYPE,
    CHANGE_NAME,
    GAMES_PLAYED_COUNTER,
    GAMES_COMPLETED_COUNTER,
    SHOT_AT_DOUBLE,
    DOUBLE_HIT,
    INCREMENT_LIVES,
    DECREMENT_LIVES,
    BOBS_SCORE
} from './constants/action-types';


export const subtractScore = (payload, gameType) => ({
    type: SCORE_TO_SUBTRACT,
    payload,
    gameType
});

export const setGameType = (payload) => ({
    type: SET_GAME_TYPE,
    payload
});

export const changeName = (payload) => ({
    type: CHANGE_NAME,
    payload
})

export const gamesPlayedCounter = (gameType) => ({
    type: GAMES_PLAYED_COUNTER,
    gameType
})

export const gamesCompletedCounter = (gameType) => ({
    type: GAMES_COMPLETED_COUNTER,
    gameType
})

export const shotAtDouble = (gameType) => ({
    type: SHOT_AT_DOUBLE,
    gameType
})

export const doubleHit = (payload, gameType) => ({
    type: DOUBLE_HIT,
    payload,
    gameType
})
export const incrementLives = (gameType) => ({
    type: INCREMENT_LIVES,
    gameType
})
export const decrementLives = (gameType) => ({
    type: DECREMENT_LIVES,
    gameType
})
export const bobsScore = (payload, gameType) => ({
    type: BOBS_SCORE,
    payload,
    gameType
})
