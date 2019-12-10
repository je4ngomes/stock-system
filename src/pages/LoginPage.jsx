import React from 'react';
import {
    Row,
    Col,
} from 'antd';
import Title from 'antd/lib/typography/Title';

import LoginForm from '../components/Login/LoginForm';
import PaneContainer from '../components/PaneContainer';

function LoginPage() {
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
                <Col span={6} offset={9} style={{ position: 'relative', top: '5rem' }}>
                    <PaneContainer 
                        textAlign='center' 
                        background='#263238'
                    >
                        <Title 
                            style={{ textAlign: 'center', color: '#fff' }} 
                            level={2}
                        >
                            Entrar
                        </Title>
                        <LoginForm />
                    </PaneContainer>
                </Col>
            </Row>
        </div>
    )
}

export default LoginPage;
