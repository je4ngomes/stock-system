import {
    SIGNIN_SUCCESS,
    SIGNIN_ERROR,
    SIGNUP_SUCCESS,
    SIGNUP_ERROR,
    AUTH_PROGRESS,
    SIGNOUT_SUCCESS,
    SIGNOUT_ERROR
} from '../types';
import firebase, { firestore } from 'firebase';

export const signIn = ({ email, password, remember }) => (
    dispatch => {
        dispatch({ type: AUTH_PROGRESS });

        firebase.auth().setPersistence(firebase.auth.Auth.Persistence[remember ? 'LOCAL' : 'NONE'])
            .then(() => firebase.auth().signInWithEmailAndPassword(email, password))
            .then(() => dispatch({ type: SIGNIN_SUCCESS }))
            .catch(e => dispatch({ type: SIGNIN_ERROR, payload: e}));
    }
);
//auth/user-not-found

export const signUp = ({ creds, userInfo }) => (
    dispatch => {
        dispatch({ type: AUTH_PROGRESS });

        firebase.auth().createUserWithEmailAndPassword(creds.email, creds.password)
            .then(user => {
                if (!user) dispatch({ type: SIGNUP_ERROR });

                return firestore().collection('users').doc(user.user.uid).set({
                    basicInfo: {
                        fullName: userInfo.fullName,
                        prefix: userInfo.prefix,
                        phone: userInfo.phoneNumber
                    }
                }).then(() => user.updateProfile({
                    displayName: userInfo.fullName,
                    phoneNumber: userInfo.phoneNumber
                }));
            })
            .then(() => dispatch({ type: SIGNUP_SUCCESS }))
            .catch(e => dispatch({ type: SIGNUP_ERROR, payload: e }));
    }
);

export const signOut = () => (
    (dispatch) => {
        dispatch({ type: AUTH_PROGRESS });
        
        firebase.auth().signOut()
            .then(() => dispatch({ type: SIGNOUT_SUCCESS }))
            .catch(e => dispatch({ type: SIGNOUT_ERROR }));
    }
);