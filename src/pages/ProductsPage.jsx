import React, { useState, useEffect } from 'react';
import { useFirestoreConnect } from 'react-redux-firebase';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Layout, Button } from 'antd';
import styled from 'styled-components';

import Title from 'antd/lib/typography/Title';

import ProductCard from '../components/shared/ProductCard';
import ProductCardCollection from '../components/shared/ProductCardCollection';
import CreateProductModal from '../components/dashboard/product/CreateProductModal';
import SearcheableForm from '../components/SearcheableForm';
import useFetchProducts from '../hooks/useFetchProducts';

const { Header, Content } = Layout;

const Div = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
`;

const ProductsPage = () => {
    const [{ search, brand }, setFilterBy] = useState({ search: '', brand: 1 });
    const {
        isLoading,
        productLength,
        isProductPagEmpty,
        products,
        fetchMore
    } = useFetchProducts(() => ({ 
        collection: 'products',
        orderBy: ['timestamp', 'desc'],
        limit: 8,
        where: [
            ['keywords', 'array-contains', search],
            [brand !== 1 ? 'brand.brand' : 'brand.default', '==', brand]
        ] 
    }), { brand, search });

    return (
        <div>
            <Header style={{ lineHeight: 0 }}>
                <Div>
                    <div>
                        <Title level={4}>Produtos</Title>
                    </div>
                    <div>
                        <SearcheableForm handleSubmit={filterObj => setFilterBy({search, brand, ...filterObj})}/>
                    </div>
                    <div>
                        <CreateProductModal />
                    </div>
                </Div>
            </Header>
            <Content>
                <div>
                    <ProductCardCollection collection={products}>
                        <ProductCard showAction/>
                    </ProductCardCollection>
                </div>
                <Row>
                    <div style={{ textAlign: 'center', marginTop: 5 }}>
                        {
                            (productLength >= 8 && isProductPagEmpty > 0) && (
                                <Button
                                    shape='round'
                                    className='pagination__btn'
                                    onClick={fetchMore} 
                                    loading={isLoading} 
                                    type='primary'>
                                    Carregar mais
                                </Button>
                            )
                        }

                    </div>
                </Row>
            </Content>
        </div>
    )
}

export default ProductsPage;
