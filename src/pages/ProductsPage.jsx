import React, { useState } from 'react';
import { Button, Row, Col, Layout, Icon } from 'antd';

import Title from 'antd/lib/typography/Title';
import ProductCard from '../components/dashboard/product/ProductCard';
import ProductCardCollection from '../components/dashboard/product/ProductCardCollection';

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
                    <ProductCardCollection 
                        collection={[{ imgSrc: 'https://images.tcdn.com.br/img/img_prod/15959/console_playstation_4_pro_2_controles_4k_hd_1tb_hdmi_13632_2_20190124135815.jpg', title: 'Playstation 4 pro', price:1500 }]}/>
                </Row>
            </Content>
        </div>
    )
}

export default CategoriesPage;
