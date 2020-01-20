import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Paper } from '@material-ui/core';

import ImageSlider from '../components/StoreClient/ImageSlider';
import ProductDetails from '../components/StoreClient/ProductDetails';
import SpinnerSvg from '../assets/spinner.svg';

const StyledDiv = styled(Paper)`
    display: flex;
    flex-flow: row;
    background: #fff;
    padding: 20px;
    justify-content: space-between;

    div { flex: 1; }


    @media all and (max-width: 900px) {
        flex-flow: column;

        .MuiPaper-elevation1 {
            box-shadow: none;
        }

        div:nth-child(1) {
            margin-bottom: 10px;
        }
    }
`;

const ProductDetailsPage = () => {
    const match = useRouteMatch();

    useFirestoreConnect({
        collection: 'products',
        doc: match.params.id
    });
    const product = useSelector(({ firestore: { ordered } }) => ordered.products && ordered.products[0]);

    return (
        <StyledDiv>
            {isLoaded(product) ? (
                <>
                    <div>
                    <ImageSlider items={product.imgUrls.map(src => ({ original: src }))}/>
                    </div>
                    <div>
                        <ProductDetails
                            title={product.name}
                            price={product.price}
                            discount={product.discount}
                            description={product.description}/>
                    </div>
                </>
            ) : (
                <div style={{ flex: 1 }}><img src={SpinnerSvg} alt='' /></div>
            )}
        </StyledDiv>
    );
};

export default ProductDetailsPage;