import React from 'react';
import Title from 'antd/lib/typography/Title';

const DisplayPrice = ({ price }) => (
        <Title level={4}>
           R$ {price.toFixed(2)}
        </Title>
);

export default DisplayPrice;
