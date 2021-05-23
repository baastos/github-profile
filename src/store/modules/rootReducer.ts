import {combineReducers} from 'redux'
import { user } from './user/reducer';
import token from './token/reducer';

export default combineReducers({
user,
token
})