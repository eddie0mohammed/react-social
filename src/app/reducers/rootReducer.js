import {combineReducers} from 'redux';
import eventReducer from '../../features/event/eventReducer';
import {reducer as FormReducer} from 'redux-form';
import modalReducer from '../../features/modals/modalReducer';
import auhtReducer from '../../features/auth/authReducer';

const rootReducer = combineReducers({
    events: eventReducer,
    form: FormReducer,
    modals: modalReducer,
    auth: auhtReducer
});
export default rootReducer;