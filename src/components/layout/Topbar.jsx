import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Menu, Icon } from 'antd';

import { signOut } from '../../store/actions/authAction';
import useOnAuthChange from '../../hooks/useOnAuthChange';

const { SubMenu } = Menu;

const Topbar = () => {
    const [current, setCurrent] = useState(null);
    const dispatch = useDispatch();

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
                {/* <Menu.Item key='1'>
                    <Icon type='notification'/>
                    Notificações
                </Menu.Item> */}
                <Menu.Item key='2' onClick={() => dispatch(signOut())}>
                    <Icon type='logout'/>
                    Sair
                </Menu.Item>
            </SubMenu>
        </Menu>
    );
}

export default Topbar;