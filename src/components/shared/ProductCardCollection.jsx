import React, { cloneElement } from 'react';
import styled from 'styled-components';
import { isLoaded, isEmpty } from 'react-redux-firebase';
import { Col, Row, Empty } from 'antd';

import spinner from '../../assets/spinner.svg';
import device from '../../utils/device';

const Div = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
`;

const DivChild = styled.div`
    margin-bottom: 10px;
    flex-basis: 100%;

    @media all and (min-width: 1045px) {
        flex-basis: 48%;
    }
`;


const ProductCardCollection = ({ collection, children }) => (
    <>
    {collection[0] !== null ? (
        <Div gutter={[16, 16]}>        
            {isEmpty(collection) ? (
                <Empty className='center_dashboard_screen' />
            ) : (
                collection.map((product, i) => (
                    <DivChild span={12} key={product.id}>
                        {cloneElement(children, { product })}
                    </DivChild>
                ))
            )}
        </Div>
        ) : (
            <div className='center_dashboard_screen'>
                <img src={spinner} />
            </div>
        )}
    </>
);

export default ProductCardCollection;
