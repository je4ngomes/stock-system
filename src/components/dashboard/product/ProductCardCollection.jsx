import React from 'react';
import { Col, Row } from 'antd';

import ProductCard from './ProductCard';

const ProductCardCollection = ({ collection }) => (
    <Row gutter={[16, 16]}>
        {collection.map((product, i) => (
            <Col span={6} key={i}>
                <ProductCard product={product}/>
            </Col>
        ))}
    </Row>
);

export default ProductCardCollection;
