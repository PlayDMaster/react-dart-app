export const getPlayerName = (state) => state.players.playerInfo.name;

export const getGameType = (state) => state.game.gameType;

export const getPlayerAverage = (state, gameType) => state[gameType].average;

export const getPlayerScores = (state, gameType) => state[gameType].scoresMade;

export const getMarker100 = (state, gameType) => state[gameType].tonTo139;

export const getMarker140 = (state, gameType) => state[gameType].ton40To169;

export const getMarker170 = (state, gameType) => state[gameType].ton70To179;

export const getMarker180 = (state, gameType) => state[gameType].ton80;

