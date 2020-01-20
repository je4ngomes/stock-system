import React from 'react';
import {
    Row,
    Column
} from 'simple-flexbox';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import BadgeShoppingCart from '../shared/BadgeShoppingCart';
import BadgeNotification from '../shared/BadgeNotification';

const StyledColumn = styled(Column)`
    display: none !important;
    @media all and (max-width: 959px) {
        padding: 5px 0px;
        display: flex !important;
        position: fixed;
        width: 100%;
        bottom: 0;
    }
`;

const BottomAppBar = () => (
    <StyledColumn style={{ background: '#2196f3' }}>
        <Row justifyContent='space-evenly' style={{ color: '#fff' }}>
            <Link to='/store/cart' style={{ color: '#fff' }}>
                <IconButton color="inherit">
                    <BadgeShoppingCart>
                        <ShoppingCartIcon />
                    </BadgeShoppingCart>
                </IconButton>
            </Link>                
            <IconButton color="inherit">
                <BadgeNotification>
                    <NotificationsIcon />
                </BadgeNotification>
            </IconButton>                
            <IconButton edge="end" color="inherit">
                <AccountCircleIcon />
            </IconButton>
        </Row>
    </StyledColumn>
);

export default BottomAppBar;