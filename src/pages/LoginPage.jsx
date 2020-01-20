import React, { useEffect } from 'react';
import {
    Row,
    Col,
    message,
} from 'antd';
import { useSelector } from 'react-redux';
import useRedirectAuthenticatedUser from '../hooks/useRedirectAuthenticatedUser';
import Title from 'antd/lib/typography/Title';

import LoginForm from '../components/Login/LoginForm';
import PaneContainer from '../components/PaneContainer';
import ScreenLoader from '../components/ScreenLoader';

function LoginPage() {
    const {  authError, auth } = useSelector(state => ({
        auth: state.firebase.auth,
        authError: state.auth.error
    }));

    const isLoading = useRedirectAuthenticatedUser({
        redirectAdminTo: '/dashboard',
        redirectUserTo: '/store'
    }, [auth.uid]);

    useEffect(() => {
        if (authError)
            message.error(authError.message, 3);
    }, [authError]);

    if (isLoading) return <ScreenLoader/>;

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
