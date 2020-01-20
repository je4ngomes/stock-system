import firebase from 'firebase';
import shortid from 'shortid';
import { 
    PRODUCT_CREATED, 
    PRODUCT_PROGRESS, 
    PRODUCT_ERROR, 
    PRODUCT_DELETED,
    PRODUCT_FETCH_PROGRESS,
    PRODUCT_DELETE_PROGRESS, 
    PRODUCTS_FETCHED
} from '../types';
import { createKeywords } from '../../utils/utils';

export const uploadImg = file => {
    const fileRef = `images/${shortid.generate()}`;
    const childRef = firebase.storage().ref().child(fileRef);

    return childRef.put(file.originFileObj, { contentType: file.type })
        .then(_ => childRef.getDownloadURL());
};

const deleteImgByUrlRef = url => (
    firebase
        .storage()
        .refFromURL(url)
        .delete()
);

export const createProduct = product => dispatch => {
    const user = firebase.auth().currentUser;
    const db = firebase.firestore();

    const docId = product.name.toLowerCase().split(/\s/).join('_')+shortid.generate();

    dispatch({ type: PRODUCT_PROGRESS });
    Promise.all(product.productImgs.map(uploadImg))
        .then(urls => 
            db.collection('products').doc(docId).set({
                name: product.name.toLowerCase(),
                price: parseFloat(product.price),
                discount: product.discount,
                description: product.description,
                quantity: product.quantity,
                imgUrls: urls,
                brand: { default: 1, brand: product.brand },
                createdBy: db.doc(`/users/${user.uid}`),
                keywords: createKeywords(product.name),
                timestamp: +new Date()
            })
        )
        .then(() => dispatch({ type: PRODUCT_CREATED }))
        .catch(e => dispatch({ type: PRODUCT_ERROR, payload: e }));
};

export const updateProduct = product => dispatch => {

};

export const fetchProductPaginated = (startAfter, brand, search) => dispatch => {
    dispatch({ type: PRODUCT_FETCH_PROGRESS });
    firebase.firestore()
        .collection('products')
        .orderBy('timestamp')
        .startAfter(startAfter)
        .where(brand !== 1 ? 'brand.brand' : 'brand.default', '==', brand)
        .where('keywords', 'array-contains', search)
        .limit(8)
        .get()
        .then(({ docs }) => {
            dispatch({ type: PRODUCTS_FETCHED, payload: docs.map(doc => doc.data()) })
        })
};

export const deleteProduct = productId => dispatch => {
    const db = firebase.firestore();
    const docRef = db.collection('products').doc(productId);

    dispatch({ type: PRODUCT_DELETE_PROGRESS });
    
    docRef.get()
        .then(doc => doc.data().imgUrls.forEach(deleteImgByUrlRef))
        .then(() => docRef.delete())
        .then(() => dispatch({ type: PRODUCT_DELETED }))
        .catch(e => dispatch({ type: PRODUCT_ERROR, payload: e }));
};