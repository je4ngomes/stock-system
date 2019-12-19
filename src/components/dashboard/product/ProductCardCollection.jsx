import React from 'react';
import { Col, Row } from 'antd';

import ProductCard from './ProductCard';

const ProductCardCollection = ({ collection }) => (
    <Row gutter={[16, 16]}>
        {collection.map(product => (
            <Col span={6}>
                <ProductCard product={product}/>
            </Col>
        ))}
    </Row>
);

export default ProductCardCollection;
