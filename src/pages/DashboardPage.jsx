import React from 'react';
import { Route, useRouteMatch, useLocation } from 'react-router-dom';
import { Layout, Breadcrumb } from 'antd';
import Title from 'antd/lib/typography/Title';

import Topbar from '../components/layout/Topbar';
import Sidebar from '../components/layout/Sidebar';

import CategoriesPage from './CategoriesPage';
import ProductsPage from './ProductsPage';
import EventPage from './EventPage';

const { Header, Content, Sider } = Layout;

const DashboardPage = () => {
    const match = useRouteMatch();
    const location = useLocation();

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
                        {location.pathname.split('/').map(x => (<Breadcrumb.Item>{x}</Breadcrumb.Item>))}
                    </Breadcrumb>
                    <Content
                        style={{
                        background: '#fff',
                        padding: 24,
                        margin: 0,
                        minHeight:"100vh",
                        }}
                    >
                        <Route path={`${match.path}/products`}>
                            <ProductsPage />
                        </Route>
                        <Route path={`${match.path}/orders`}></Route>
                        <Route path={`${match.path}/categories`}>
                            <CategoriesPage />
                        </Route>
                        <Route path={`${match.path}/events`}>
                            <EventPage />
                        </Route>
                        <Route path={`${match.path}/statistics`}></Route>
                        <Route path={`${match.path}/configuration/account`}></Route>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    )
}

export default DashboardPage;