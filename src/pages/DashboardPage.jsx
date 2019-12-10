import React from 'react';
import { BrowserRouter as Router, Route, useRouteMatch } from 'react-router-dom';
import { Layout, Breadcrumb } from 'antd';
import Title from 'antd/lib/typography/Title';

import Topbar from '../components/layout/Topbar';
import Sidebar from '../components/layout/Sidebar';

const { Header, Content, Sider } = Layout;

const DashboardPage = () => {
    const match = useRouteMatch();

    return (
        <Layout>
            <Header style={{ padding: 'none !important' }} className="header">
                <div className="logo">
                    <Title style={{ color: '#424242' }} level={3}>Global Manager</Title>
                </div>
                <Topbar/>
            </Header>
            <Layout>
                <Sider style={{ background: '#fff' }}>
                    <Sidebar />
                </Sider>
                <Layout style={{ padding: '0 24px 24px 34px' }}>
                    <Breadcrumb style={{ margin: '16px 0', textAlign: 'left' }}>
                        <Breadcrumb.Item>Início</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                        style={{
                        background: '#fff',
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                        }}
                    >
                        <Route path={`${match.path}/products`}></Route>
                        <Route path={`${match.path}/orders`}></Route>
                        <Route path={`${match.path}/categories`}></Route>
                        <Route path={`${match.path}/events`}></Route>
                        <Route path={`${match.path}/statistics`}></Route>
                        <Route path={`${match.path}/config/my_account`}></Route>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    )
}

export default DashboardPage;