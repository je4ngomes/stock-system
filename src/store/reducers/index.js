import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

import authReducer from './authReducer';
import eventReducer from './eventReducer'
import productReducer from './productReducer';
import brandReducer from './brandReducer';

export default combineReducers({
    auth: authReducer,
    event: eventReducer,
    product: productReducer,
    brand: brandReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});