import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

import authReducer from './authReducer';
import eventReducer from './eventReducer'
import productReducer from './productReducer';
import categoryReducer from './categoryReducer';

export default combineReducers({
    auth: authReducer,
    event: eventReducer,
    product: productReducer,
    category: categoryReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});