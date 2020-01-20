import React from 'react';
import styled from 'styled-components';
import { Typography, Button, Divider } from '@material-ui/core';
import DisplayPrice from '../shared/DisplayPrice';

const Div = styled.div`
    display: flex;
    min-height: 80%;
    width: 80%;
    margin: auto;
    flex-flow: column;
    justify-content: space-evenly;
    padding: 20px;

    div:nth-child(3) {
        align-self: flex-start;
    }

    @media all and (max-width: 900px) {
        width: 95%;
    }
`;

const StyledButton = styled(Button)`
    background: #2196f3 !important;
    color: #fff !important;
`;

const ProductDetails = ({
    title,
    price,
    discount,
    description
}) => {
    return (
        <Div>
            <div>
                <Typography style={{ textTransform: 'capitalize' }} variant='h4'>
                    {title}
                </Typography>
                <Divider/>
            </div>
            <div>
                <Typography variant='body2' align='justify'>
                    {description}
                </Typography>
            </div>
            <div>
                <DisplayPrice price={price} discount={discount} textSize={30} />
            </div>
            <div>
                <StyledButton 
                    variant='contained'
                    size='large'>
                    Adicionar ao Carrinho
                </StyledButton>
            </div>
        </Div>
    );
};

export default ProductDetails;
