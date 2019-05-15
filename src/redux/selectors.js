export const getPlayerName = (state, activePlayer) => state.players[activePlayer].name;

export const getActivePlayer = (state) => state.players.activePlayer;

export const getPlayerAverage = (state, activePlayer) => state.scores[activePlayer].markers.average;

export const getPlayerScores = (state, activePlayer) => state.scores[activePlayer].scoresMade;

export const getMarker100 = (state, activePlayer) => state.scores[activePlayer].markers.tonTo139;

export const getMarker140 = (state, activePlayer) => state.scores[activePlayer].markers.ton40To169;

export const getMarker170 = (state, activePlayer) => state.scores[activePlayer].markers.ton70To179;

export const getMarker180 = (state, activePlayer) => state.scores[activePlayer].markers.ton80;

export const getGameType = (state) => state.game.gameType;