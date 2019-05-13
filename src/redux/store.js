import { createStore } from 'redux';
import scores from './reducers/scores';

export default createStore(scores, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());