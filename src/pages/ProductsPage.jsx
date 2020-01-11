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
import { fetchProductPaginated } from '../store/actions/productAction';

const { Header, Content } = Layout;

const Div = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
`;

const ProductsPage = () => {
    const [{ search, category }, setFilterBy] = useState({ search: '', category: 1 });
    const dispatch = useDispatch();
    useFirestoreConnect(() => ({ 
            collection: 'products',
            orderBy: ['timestamp', 'desc'],
            limit: 8,
            where: [
                ['keywords', 'array-contains', search],
                [category !== 1 ? 'category.category' : 'category.default', '==', category]
            ] 
    }));

    const {
        isLoading,
        productLength,
        isProductPagEmpty,
        products
    } = useSelector(({ firestore: { ordered }, product }) => {
        const stateObj = {
            products: [...(ordered.products || [null]), ...product.products],
            isLoading: product.fetch_progress
        };
        const productLength = stateObj.products.length;

        return { 
            ...stateObj,
            isProductPagEmpty: product.isProductPagEmpty, 
            productLength        
        }
    });


    const handleLoadMore = () => (
        dispatch(
            fetchProductPaginated(
                products[products.length-1].timestamp,
                category,
                search
            )
        )
    );

    return (
        <div>
            <Header style={{ lineHeight: 0 }}>
                <Div>
                    <div>
                        <Title level={4}>Produtos</Title>
                    </div>
                    <div>
                        <SearcheableForm handleSubmit={filterObj => setFilterBy({search, category, ...filterObj})}/>
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
                                    onClick={handleLoadMore} 
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
