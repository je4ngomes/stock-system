import React, { useState } from 'react';
import { Button, Row, Col, Layout, Icon } from 'antd';

import Title from 'antd/lib/typography/Title';
import ProductCard from '../components/dashboard/product/ProductCard';

const { Header, Content } = Layout;

const CategoriesPage = () => {
    const [visible, setVisible] = useState();

    return (
        <div>
            <Header style={{ lineHeight: 0 }}>
                <Row>
                    <Col md={4}>
                        <Title level={4}>Produtos</Title>
                    </Col>
                    <Col sm={4} md={4} offset={16}>
                        <Button
                            type="primary"
                            onClick={() => setVisible(true)}
                            className='btn__new__category'>
                                <Icon type='plus' />
                                Adiciona produto
                        </Button>
                        {/* <CategoryModal stateVisible={[visible, setVisible]}/> */}
                    </Col>
                </Row>
            </Header>
            <Content>
                <Row>
                    <Col span={24}>
                        <ProductCard />
                    </Col>
                </Row>
            </Content>
        </div>
    )
}

export default CategoriesPage;
