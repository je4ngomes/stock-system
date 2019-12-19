import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

import authReducer from './authReducer';
import eventScheduleReducer from './eventScheduleReducer'
import productReducer from './productReducer';

export default combineReducers({
    auth: authReducer,
    eventSchedule: eventScheduleReducer,
    product: productReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});