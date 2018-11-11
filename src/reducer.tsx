import {combineReducers} from 'redux';
import todoItems from './redux/todoiItems/reducer';

const Reducer = combineReducers({todoItems});

export default Reducer;