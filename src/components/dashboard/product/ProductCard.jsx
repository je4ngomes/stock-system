import React from 'react';
import { Card, Icon } from 'antd';
import Meta from 'antd/lib/card/Meta';

const ProductCard = () => (
    <Card
        style={{ width: 300 }}
        hoverable
        cover={
            <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
        }
        actions={[
            <Icon type="edit" key="edit" />,
        ]}
    >
        <Meta
            title="Card title"
            description="This is the description"
        />
    </Card>
);

export default ProductCard;
