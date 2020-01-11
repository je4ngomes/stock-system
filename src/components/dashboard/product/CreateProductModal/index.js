import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { createProduct } from '../../../../store/actions/productAction';
import CreateProductModal from './CreateProductModal'; 
import { message } from 'antd';

export default () => {
    const dispatch = useDispatch();
    const { 
        product: { loading, error }
    } = useSelector(state => ({ 
        product: state.product
    }));

    const handleSubmit = (values) => {
        dispatch(createProduct(values));
    };

    useEffect(() => {
        if (error)
            message.error(error.message, 3);
    }, [error]);

    return (
        <CreateProductModal 
            loading={loading}
            submit={handleSubmit} 
        />
    );
};