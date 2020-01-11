import firebase from 'firebase';
import { 
    CATEGORY_CREATED, 
    CATEGORY_ERROR, 
    CATEGORY_DELETED, 
    CATEGORY_PROGRESS
} from '../types';

export const createCategory = name => dispatch => {
    dispatch({ type: CATEGORY_PROGRESS });

    firebase.firestore().collection('categories')
        .doc()
        .set({
            name,
            timestamp: +new Date()
        })
        .then(() => dispatch({ type: CATEGORY_CREATED }))
        .catch(e => dispatch({ type: CATEGORY_ERROR, payload: e }));
};

export const deleteCategory = id => dispatch => {
    dispatch({ type: CATEGORY_PROGRESS });

    firebase.firestore().collection('categories')
        .doc(id)
        .delete()
        .then(() => dispatch({ type: CATEGORY_DELETED }))
        .catch(e => dispatch({ type: CATEGORY_ERROR, payload: e }));
};