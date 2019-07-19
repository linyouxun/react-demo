import { createStore, combineReducers } from 'redux';
import { decorationDetailData } from './reducer'

let store = createStore(combineReducers(decorationDetailData));
export default store;