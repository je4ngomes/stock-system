import React from 'react';
import ProductCard from './ProductCard';

export default ({ product }) => {
    const onEdit = (id) => {

    };

    const onDelete = (id) => {

    };

    return (
        <ProductCard                     
            imgSrc={product.imgSrc}
            title={product.title}
            key={product.id}
            price={product.price}
            onEdit={onEdit.bind(null, product.id)}
            onDelete={onDelete.bind(null, product.id)} />
    );
};