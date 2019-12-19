import {
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    CREATE_USER_SUCCESS,
    CREATE_USER_ERROR
} from '../types';

export const loginUser = ({ email, password }) => (
    (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => dispatch({ type: LOGIN_SUCCESS }))
            .catch(e => dispatch({ type: LOGIN_ERROR, payload: { message: 'Usuário ou senha incorretos.' } }));
    }
);
//auth/user-not-found

export const createUser = ({ creds, userInfo }) => (
    (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        
        firebase.auth().createUserWithEmailAndPassword(creds.email, creds.password)
            .then(user => {
                
                dispatch({ type: CREATE_USER_SUCCESS })
            })
            .catch(e => dispatch({ type: CREATE_USER_ERROR }));
    }
);