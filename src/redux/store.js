import { createStore, combineReducers } from 'redux';
import gameReducer from './reducers/game';
import playersReducer from './reducers/players';
import one21Reducer from './reducers/121';
import five01Reducer from './reducers/501';
import birdsReducer from './reducers/birds';
import holyoakeReducer from './reducers/holyoake';
import bobs27Reducer from './reducers/bobs27';

const rootReducer = combineReducers({
    game: gameReducer,
    players: playersReducer,
    '121': one21Reducer,
    '501': five01Reducer,
    birds: birdsReducer,
    holyoake: holyoakeReducer,
    bobs27: bobs27Reducer
});


export default createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());