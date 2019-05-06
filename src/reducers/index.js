import { combineReducers } from 'redux';
import cells from './cells';
import timer from './timer';

const rootReducer = combineReducers({ cells, timer });

export default rootReducer;
