import firebase from 'firebase';
import shortid from 'shortid';
import { PRODUCT_CREATED, PRODUCT_PROGRESS, PRODUCT_ERROR } from '../types';

const uploadImg = (file) => {
    const fileRef = `images/${shortid.generate()}`;
    const childRef = firebase.storage().ref().child(fileRef);

    return childRef.put(file.originFileObj, { contentType: file.type })
        .then(_ => childRef.getDownloadURL());
};

export const createProduct = product => dispatch => {
    const user = firebase.auth().currentUser;
    const db = firebase.firestore();

    dispatch({ type: PRODUCT_PROGRESS });
    Promise.all(product.productImgs.map(uploadImg))
        .then(urls => 
            db.collection('products').doc().set({
                name: product.name,
                price: product.price,
                discount: product.discount,
                description: product.description,
                quantity: product.quantity,
                imgUrls: urls,
                category: db.doc(`/categories/${product.category}`),
                createdBy: db.doc(`/users/${user.uid}`)
            })
        )
        .then(() => dispatch({ type: PRODUCT_CREATED }))
        .catch(e => dispatch({ type: PRODUCT_ERROR }));
};

const updateProduct = product => dispatch => {

};

const deleteProduct = product => dispatch => {

};