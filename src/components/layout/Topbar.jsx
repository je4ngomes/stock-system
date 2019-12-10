import React, { useState } from 'react';
import { Menu, Icon, Avatar, Dropdown } from 'antd';
import Title from 'antd/lib/typography/Title';

const { SubMenu } = Menu;

const Topbar = () => {
    const [current, setCurrent] = useState(null);

    const handleClick = e => setCurrent(e.key);

    return (
        <Menu 
            onClick={handleClick} 
            selectedKeys={[current]} 
            mode="horizontal"
        >
            <SubMenu
                key='sub1'
                style={{ float: 'right', marginRight: 20 }} 
                title={
                    <span>
                        <Icon type='user'/>
                        Usuário
                    </span>
                }
            > 
                <Menu.Item key='1'>
                    <Icon type='notification'/>
                    Notificações
                </Menu.Item>
                <Menu.Item key='2'>
                    <Icon type='logout'/>
                    Sair
                </Menu.Item>
            </SubMenu>
        </Menu>
    );
}

export default Topbar;