import React from 'react';
import firebase from 'firebase';
import { Route, useRouteMatch, useLocation, useHistory } from 'react-router-dom';
import { Layout, Breadcrumb } from 'antd';
import Title from 'antd/lib/typography/Title';

import Topbar from '../components/layout/Topbar';
import Sidebar from '../components/layout/Sidebar';

import ProductsPage from './ProductsPage';
import EventPage from './EventPage';
import useOnAuthChange from '../hooks/useOnAuthChange';

const { Header, Content, Sider, Footer } = Layout;

const DashboardPage = () => {
    const match = useRouteMatch();
    const location = useLocation();
    const history = useHistory();

    useOnAuthChange(user => {
        // only logged users has access to this page.
        if (!user) history.push('/login');
    
        // but only those who has admin privileges can stay
        const currentUser = firebase.auth().currentUser;
        if (!currentUser) return;

        currentUser.getIdTokenResult().then(({ claims: { isAdmin } }) => !isAdmin && history.push('/store'));
    });

    return (
        <Layout>
            <Header style={{ padding: 'none !important' }} className="header">
                <div className="logo">
                    <Title style={{ color: '#424242' }} level={3}>Logo</Title>
                </div>
                <Topbar/>
            </Header>
            <Layout>
                <Sider style={{ background: '#fff' }}>
                    <Sidebar />
                </Sider>
                <Layout style={{ padding: '0 24px 24px 34px' }}>
                    <Breadcrumb style={{ margin: '16px 0', textAlign: 'left' }}>
                        {location.pathname.split('/').map((x, i) => (<Breadcrumb.Item key={i}>{x}</Breadcrumb.Item>))}
                    </Breadcrumb>
                    <Content
                        style={{
                            background: '#fff',
                            padding: 24,
                            margin: 0,
                            minHeight:"100vh"
                        }}
                    >
                        <Route path={`${match.path}/products`}>
                            <ProductsPage />
                        </Route>
                        <Route path={`${match.path}/orders`}></Route>
                        <Route path={`${match.path}/events`}>
                            <EventPage />
                        </Route>
                        <Route path={`${match.path}/statistics`}></Route>
                        <Route path={`${match.path}/configuration/account`}></Route>
                    </Content>
                    <Footer className='footer__dashboard'>
                        Footer
                    </Footer>
                </Layout>
            </Layout>
        </Layout>
    )
}

export default DashboardPage;