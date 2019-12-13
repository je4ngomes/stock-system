import React from 'react';
import { Card, Icon, Button } from 'antd';
import Meta from 'antd/lib/card/Meta';
import DisplayPrice from './DisplayPrice';

const ProductCard = ({
    imgSrc,
    price,
    title
}) => (
    <Card
        style={{ width: 250 }}
        size='small'
        className='shadow'
        cover={
            <img
                alt='example'
                src={imgSrc}
            />
        }
        actions={[
            (
                <Button
                    type='primary'
                    shape='circle'    
                >
                    <Icon type='edit' key='edit' theme='filled' />
                </Button>
            ),
            (
                <Button
                    type='danger'
                    shape='circle'    
                >
                    <Icon type='delete' key='delete' theme='filled' />
                </Button>
            )

        ]}
    >
        <Meta
            title={<DisplayPrice price={price} />}
            description={title}
        />
    </Card>
);

export default ProductCard;
