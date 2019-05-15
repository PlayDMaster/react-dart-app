import { createStore, combineReducers } from 'redux';
import scoresReducer from './reducers/scores';
import gameReducer from './reducers/game';
import playersReducer from './reducers/players';

const rootReducer = combineReducers({ scores: scoresReducer, game: gameReducer, players: playersReducer });


export default createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());