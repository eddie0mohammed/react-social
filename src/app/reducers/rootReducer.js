import {combineReducers} from 'redux';
import eventReducer from '../../features/event/eventReducer';
// import {reducer} from 'redux-form';

const rootReducer = combineReducers({
    events: eventReducer,
    // form: FormReducer,
});
export default rootReducer;