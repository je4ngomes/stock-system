import React from 'react';
import { Link, useRouteMatch, useLocation } from 'react-router-dom';
import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;

const Sidebar = () => {
    const match = useRouteMatch();
    const location = useLocation();

    return (
        <Menu
            style={{ 
                width: 200,
                height: '100%',
                textAlign: 'left',
                position: 'relative'
            }}
            defaultSelectedKeys={[location.pathname]}
            mode="vertical"
        >
             <Menu.Item key={match.url}>
                <Icon type='home' />
                <span>Início</span>
                <Link to={`${match.url}`} />
            </Menu.Item>
            <Menu.Item key={`${match.url}/products`}>
                <Icon type='book' />
                <span>Produtos</span>
                <Link to={`${match.url}/products`} />
            </Menu.Item>
            <Menu.Item key={`${match.url}/categories`}>
                <Icon type="unordered-list" />
                <span>Categorias</span>
                <Link to={`${match.url}/categories`} />
            </Menu.Item>
            <Menu.Item key={`${match.url}/orders`}>
                <Icon type='schedule' />
                <span>Pedidos</span>
                <Link to={`${match.url}/orders`} />
            </Menu.Item>
            <Menu.Item key={`${match.url}/events`}>
                <Icon type='carry-out' />
                <span>Eventos</span>
                <Link to={`${match.url}/events`} />
            </Menu.Item>
            <SubMenu
                key="sub1"
                title={
                    <span>
                        <Icon type="bar-chart" />
                        <span>Estatísticas</span>
                    </span>
                }
            >
                <Menu.Item key={`${match.url}/statistics`}>
                    <Link to={`${match.url}/statistics`}>Relatório</Link>
                </Menu.Item>
            </SubMenu>
            <SubMenu 
                key="sub2"
                title={
                    <span>
                        <Icon type="setting" />
                        <span>Configurações</span>
                    </span>
                }
            >
                <Menu.Item key="7">
                    <Icon type="user" />
                    <span>Minha conta</span>
                    <Link to={`${match.url}/configuration/account`} />
                </Menu.Item>
            </SubMenu>
        </Menu>
    );
}

export default Sidebar;