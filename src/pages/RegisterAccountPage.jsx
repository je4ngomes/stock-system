import React from 'react';
import {
    Row,
    Col,
} from 'antd';
import Title from 'antd/lib/typography/Title';

import PaneContainer from '../components/PaneContainer';
import RegisterAccountForm from '../components/RegisterAccount/RegisterAccountForm';

function RegisterAccountPage() {
    return (
        <div className='auth__page'>
            <Row>
                <Col>
                    <Title style={{
                        margin: '10px 0 0 20px',
                        color: '#fff'
                    }} 
                    level={3}>
                        Global Manager
                    </Title>
                </Col>
            </Row>
            <Row>
                <Col span={7} offset={9} style={{ position: 'relative', top: '4rem' }}>
                    <PaneContainer 
                        background='#263238'
                    >
                        <Title 
                            style={{ textAlign: 'center', color: '#fff' }} 
                            level={2}
                        >
                            Cadastrar-se
                        </Title>
                            <RegisterAccountForm />
                    </PaneContainer>
                </Col>
            </Row>
        </div>
    )
}

export default RegisterAccountPage;