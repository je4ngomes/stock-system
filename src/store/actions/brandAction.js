import firebase from 'firebase';
import { 
    BRAND_CREATED, 
    BRAND_ERROR, 
    BRAND_DELETED, 
    BRAND_PROGRESS
} from '../types';

export const createBrand = name => dispatch => {
    dispatch({ type: BRAND_PROGRESS });

    firebase.firestore().collection('brands')
        .doc()
        .set({
            name,
            timestamp: +new Date()
        })
        .then(() => dispatch({ type: BRAND_CREATED }))
        .catch(e => dispatch({ type: BRAND_ERROR, payload: e }));
};

export const deleteBrand = id => dispatch => {
    dispatch({ type: BRAND_PROGRESS });

    firebase.firestore().collection('brands')
        .doc(id)
        .delete()
        .then(() => dispatch({ type: BRAND_DELETED }))
        .catch(e => dispatch({ type: BRAND_ERROR, payload: e }));
};