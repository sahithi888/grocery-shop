import cartReducer from './cart';
import {combineReducers} from 'redux';
const reducers = {cartReducer};
export default combineReducers(reducers);