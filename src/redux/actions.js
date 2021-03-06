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
    BOBS_SCORE,
    NEW_GAME
} from './constants/action-types';


export const subtractScore = (payload, gameType, gameId) => ({
    type: SCORE_TO_SUBTRACT,
    payload,
    gameType,
    gameId
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

export const shotAtDouble = (payload, gameType) => ({
    type: SHOT_AT_DOUBLE,
    payload,
    gameType
})

export const doubleHit = (payload, gameType, gameId) => ({
    type: DOUBLE_HIT,
    payload,
    gameType,
    gameId
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
export const newGame = (gameType, gameId) => ({
    type: NEW_GAME,
    gameType,
    gameId
})