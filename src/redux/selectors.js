export const getPlayerName = (state, activePlayer) => state.players[activePlayer].name;

export const getActivePlayer = (state) => state.players.activePlayer;

export const getPlayerScores = (state, activePlayer) => state.scores[activePlayer].scoresMade;

export const getGameType = (state) => state.scores.gameType;

export const getPlayerScore = (state, activePlayer) => state.scores[activePlayer].scoreLeft;