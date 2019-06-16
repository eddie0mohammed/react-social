import {combineReducers} from 'redux';
import eventReducer from '../../features/event/eventReducer';
import {reducer as FormReducer} from 'redux-form';
import modalReducer from '../../features/modals/modalReducer';
import auhtReducer from '../../features/auth/authReducer';
import asyncReducer from '../../features/async/asyncReducer';
import {reducer as ToastrReducer} from 'react-redux-toastr'; 
import {firebaseReducer} from 'react-redux-firebase';
import {firestoreReducer} from 'redux-firestore';

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    events: eventReducer,
    form: FormReducer,
    modals: modalReducer,
    auth: auhtReducer,
    async: asyncReducer,
    toastr: ToastrReducer
});
export default rootReducer;