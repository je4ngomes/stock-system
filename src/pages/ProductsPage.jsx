import React from 'react';
import { Row, Col, Layout, Pagination } from 'antd';

import Title from 'antd/lib/typography/Title';

import ProductCardCollection from '../components/dashboard/product/ProductCardCollection';
import ProductModal from '../components/dashboard/product/ProductModal';
import SearcheableForm from '../components/SearcheableForm';

const { Header, Content } = Layout;

const ProductsPage = () => {

    return (
        <div>
            <Header style={{ lineHeight: 0 }}>
                <Row>
                    <Col md={4}>
                        <Title level={4}>Produtos</Title>
                    </Col>
                    <Col sm={4} md={14} offset={3}>
                        <SearcheableForm handleSubmit={(x) => console.log(x)} categories={[{ name: 'Test', id: 1 },{ name: 'Test', id: 2 },{ name: 'Test', id: 3 },{ name: 'Test', id: 4 }]} />
                    </Col>
                    <Col sm={4} md={3} >
                        <ProductModal />
                    </Col>
                </Row>
            </Header>
            <Content>
                <Row>
                    <ProductCardCollection 
                        collection={[{ imgSrc: 'https://images.tcdn.com.br/img/img_prod/15959/console_playstation_4_pro_2_controles_4k_hd_1tb_hdmi_13632_2_20190124135815.jpg', title: 'Playstation 4 pro', price:1500 }]}/>
                </Row>
                <Row style={{ marginTop: 20, textAlign: 'center' }}>
                    <Col span={24}>
                        <Pagination
                            onChange={(page, pageSize) => {}}
                            total={10}/>
                    </Col>
                </Row>
            </Content>
        </div>
    )
}

export default ProductsPage;
