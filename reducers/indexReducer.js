import {combineReducers} from 'redux';
import videoReducers from './videoReducer';

const allReducers = combineReducers({
    videoReducers,
});
export default allReducers;
