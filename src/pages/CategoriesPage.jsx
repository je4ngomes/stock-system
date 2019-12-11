import React, { useState } from 'react';
import { Button, Row, Col, Layout, Icon } from 'antd';
import Title from 'antd/lib/typography/Title';

import CategoryModal from '../components/Dashboard/Categories/CategoryModal';
import CategoryTable from '../components/Dashboard/Categories/CategoryTable';

const { Header } = Layout;

const CategoriesPage = () => {
    const [visible, setVisible] = useState();

    return (
        <div>
            <Header style={{ lineHeight: 0 }}>
                <Row>
                    <Col md={4}>
                        <Title level={4}>Categorias</Title>
                    </Col>
                    <Col sm={4} md={4} offset={16}>
                        <Button
                            type="primary"
                            onClick={() => setVisible(true)}
                            className='btn__new__category'>
                                <Icon type='plus' />
                                Nova Categoria
                        </Button>
                        <CategoryModal stateVisible={[visible, setVisible]}/>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <CategoryTable />
                    </Col>
                </Row>
            </Header>

        </div>
    )
}

export default CategoriesPage;
