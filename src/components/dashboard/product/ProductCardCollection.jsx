import React from 'react';
import { Col, Row } from 'antd';

import ProductCard from './ProductCard';

const ProductCardCollection = ({ collection }) => (
    <Row gutter={[16, 16]}>
        {collection.map(item => (
            <Col span={6}>
                <ProductCard
                    imgSrc={item.imgSrc}
                    title={item.title}
                    price={item.price} />
            </Col>
        ))}
    </Row>
);

export default ProductCardCollection;
