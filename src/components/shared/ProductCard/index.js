import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ProductCard from './ProductCard';
import { deleteProduct } from '../../../store/actions/productAction';

export default ({ product, showAction=false, hasLink=false }) => {
    const [productSelected, setProductSelected] = useState(null);
    const { deleteLoading } = useSelector(state => ({ ...state.product }));
    const dispatch = useDispatch();

    const onEdit = (id, data) => {
        setProductSelected(id);
    };

    const onDelete = (id) => {
        setProductSelected(id);
        dispatch(deleteProduct(id))
    };
    
    return (
        <ProductCard                     
            showAction={showAction}
            hasLink={hasLink}
            id={product.id}
            imgSrc={product.imgUrls[0]}
            title={product.name}
            price={product.price}
            deleteLoading={deleteLoading && product.id === productSelected}
            discount={product.discount}
            onEdit={onEdit.bind(null, product.id)}
            onDelete={onDelete.bind(null, product.id)} />
    );
};