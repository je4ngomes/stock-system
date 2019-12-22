import React from 'react';
import { useDispatch } from 'react-redux';

import { createProduct } from '../../../../store/actions/productAction';
import ProductModal from './ProductModal'; 

export default () => {
    const dispatch = useDispatch();

    const handleSubmit = (values) => {
        dispatch(createProduct(values));
    };

    return <ProductModal categories={[{ id: 'as', name: 'as' }]} submit={handleSubmit} />
};