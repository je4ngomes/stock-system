import React from 'react';
import {
    Paper,
    Typography,
    Divider
} from '@material-ui/core';
import {
    ShoppingCart as ShoppingCartIcon,
} from '@material-ui/icons';
import styled from 'styled-components';

const StyledDiv = styled(Paper)`
    display: flex;
    flex-flow: column;
    min-height: 420px;
    width: 100%;
    background: #fff;
    padding: 20px;
`;

const Content = styled.div`
    display: flex;
    flex-flow: column;
    width: 100%;
    height: 100%;
    justify-content: space-evenly;
`;

const ShoppingCartPage = () => {

    const renderEmptyMsg = () => (
        <div style={{ textAlign: 'center' }}>
            <ShoppingCartIcon style={{ fontSize: '60pt', color: '#757575' }}/>
            <Typography style={{ color: '#666666' }} variant='h5'>
                O Seu carrinho está vazio
            </Typography>
        </div>
    );

    return (
        <StyledDiv>
            <div>
                <Typography variant='h5'>
                    Carrinho
                </Typography>
                <Divider/>                
            </div>
            <Content>
                {renderEmptyMsg()}
            </Content>
        </StyledDiv>
    );
};

export default ShoppingCartPage;