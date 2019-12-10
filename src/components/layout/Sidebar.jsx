import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;

const Sidebar = () => {
    const match = useRouteMatch();

    return (
        <Menu
            style={{ 
                width: 210,
                textAlign: 'left',
                position: 'fixed',
                height: '100%'
            }}
            defaultSelectedKeys={['0']}
            mode="inline"
        >
             <Menu.Item key="0">
                <Icon type='home' />
                <span>Início</span>
                <Link to={`${match.url}/`} />
            </Menu.Item>
            <Menu.Item key="1">
                <Icon type='book' />
                <span>Produtos</span>
                <Link to={`${match.url}/products`} />
            </Menu.Item>
            <Menu.Item key="2">
                <Icon type="unordered-list" />
                <span>Categorias</span>
                <Link to={`${match.url}/categories`} />
            </Menu.Item>
            <Menu.Item key="3">
                <Icon type='schedule' />
                <span>Pedidos</span>
                <Link to={`${match.url}/orders`} />
            </Menu.Item>
            <Menu.Item key="4">
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
                <Menu.Item key="6">
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
                    <Link to={`${match.url}/config/my_account`} />
                </Menu.Item>
            </SubMenu>
        </Menu>
    );
}

export default Sidebar;