import React from 'react';
import styled from 'styled-components';

import FiltrableProductSidePanel from '../components/StoreClient/FiltrableProductSidePanel';
import HeaderTitle from '../components/shared/HeaderTitle';
import ProductCardCollection from '../components/shared/ProductCardCollection';
import ProductCard from '../components/shared/ProductCard';
import useFetchProducts from '../hooks/useFetchProducts';

const Main = styled.main`
    flex-basis: 75%;
    padding: 0px 40px 0px 40px;
    background: #fff;
`;


const StoreLandingPage = () => {
    const {
        isLoading,
        productLength,
        isProductPagEmpty,
        products,
        fetchMore
    } = useFetchProducts(() => ({ 
        collection: 'products',
        orderBy: ['timestamp', 'desc'],
        limit: 8
    }), { brand: '', search: 1 });

    return (
        <>
            <FiltrableProductSidePanel/>
            <Main>
                <HeaderTitle title={'Busca Produtos'}/>
                <ProductCardCollection collection={products}>
                    <ProductCard hasLink={true}/>
                </ProductCardCollection>
            </Main>            
        </>
    )
};

export default StoreLandingPage;